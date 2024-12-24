// File: pages/api/downloadFile.js

import axios from "axios";
import fs from "fs";
import path from "path";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import xml2js from "xml2js";

const DOWNLOAD_URL =
  "https://services.it4profit.com/product/ro/705/ProductList.xml?USERNAME=vladbala&PASSWORD=et5Tu5FqUCN7BOlm9HLz^B%Z";

const STOCK_URL =
  "https://services.it4profit.com/product/ro/705/PriceAvail.xml?USERNAME=vladbala&PASSWORD=et5Tu5FqUCN7BOlm9HLz^B%Z";
const DOWNLOAD_DIR = path.join(process.cwd(), "abisis");
const FILE_NAME = "ProductList.xml";
const FILE_PATH = path.join(DOWNLOAD_DIR, FILE_NAME);
const STOCK_FILE_PATH = path.join(DOWNLOAD_DIR, "StockProductList.xml");
const OUTPUT_FILE_PATH = path.join(
  process.cwd(),
  "abisis",
  "parsedProductData.json"
);
const STOCK_OUTPUT_FILE_PATH = path.join(
  process.cwd(),
  "abisis",
  "productStock.json"
);

export async function GET(req: any) {
  const queryParams = req.nextUrl.searchParams;
  const action = queryParams.get("action");
  if (action === "parse") {
    try {
      const data: any = await parseXml(FILE_PATH);
      if (data) {
        if (data.ProductCatalog && data.ProductCatalog.Product) {
          const productData = data.ProductCatalog.Product;

          fs.writeFileSync(
            OUTPUT_FILE_PATH,
            JSON.stringify(productData, null, 2),
            "utf8"
          );

          return NextResponse.json({
            message:
              "Product data parsed and written to JSON file successfully.",
          });
        } else {
          return NextResponse.json({
            message: "Product data not found in the parsed XML.",
          });
        }
        return NextResponse.json({
          data,
        });
      } else {
        return NextResponse.json({
          message: "Something went wrong during file read",
        });
      }
    } catch (error) {
      return NextResponse.json({
        message: "Something went wrong during file read",
      });
    }
  }
  try {
    if (!fs.existsSync(DOWNLOAD_DIR)) {
      fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });
    }

    const filePath = path.join(DOWNLOAD_DIR, FILE_NAME);

    const response = await axios({
      method: "get",
      url: DOWNLOAD_URL,
      responseType: "stream",
    });

    const writer = fs.createWriteStream(filePath);

    await new Promise((resolve, reject) => {
      response.data.pipe(writer);

      writer.on("finish", () => {
        resolve(true);
      });

      writer.on("error", (err) => {
        reject(err);
      });
    });

    return NextResponse.json({
      message: "File downloaded successfully",
      filePath,
    });
  } catch (error: any) {
    console.error("Error downloading the file:", error);
    return NextResponse.json({
      message: "Error downloading the file",
      error: error.message,
    });
  }
}

export async function POST(req: any) {
  const queryParams = req.nextUrl.searchParams;
  const action = queryParams.get("action");
  if (action === "parse") {
    try {
      const data: any = await parseXml(STOCK_FILE_PATH);
      if (data) {
        if (data.CONTENT && data.CONTENT.PRICES) {
          const productData = data.CONTENT.PRICES;

          fs.writeFileSync(
            STOCK_OUTPUT_FILE_PATH,
            JSON.stringify(productData, null, 2),
            "utf8"
          );

          return NextResponse.json({
            message:
              "Product data parsed and written to JSON file successfully.",
          });
        } else {
          return NextResponse.json({
            message: "Product data not found in the parsed XML.",
          });
        }
        return NextResponse.json({
          data,
        });
      } else {
        return NextResponse.json({
          message: "Something went wrong during file read",
        });
      }
    } catch (error) {
      return NextResponse.json({
        message: "Something went wrong during file read",
      });
    }
  }

  try {
    // Create a writable stream for the output file
    const writeStream = fs.createWriteStream(STOCK_FILE_PATH);

    // Fetch the data from the API
    const response = await axios({
      method: "get",
      url: STOCK_URL,
      responseType: "stream", // Set the response type to stream
    });

    // Pipe the API response stream to the file
    response.data.pipe(writeStream);

    // Return a promise that resolves when the stream finishes
    await new Promise((resolve, reject) => {
      writeStream.on("finish", resolve); // Resolves when writing is complete
      writeStream.on("error", reject); // Rejects if an error occurs
    });

    // Return a success response
    return NextResponse.json({
      message: "Products mapped and saved successfully!",
      filePath: STOCK_FILE_PATH,
    });
  } catch (error: any) {
    // Handle errors
    console.error("Error while fetching and saving data:", error);
    return NextResponse.json(
      {
        message: "Failed to map products",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

async function parseXml(filePath: string) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log("File does not exist.");
      return null;
    }

    console.log("Reading file...");
    const xmlData = fs.readFileSync(filePath, "utf8");
    console.log("File read successfully.");

    return new Promise((resolve, reject) => {
      xml2js.parseString(xmlData, { explicitArray: false }, (err, result) => {
        if (err) {
          reject(null);
        } else {
          resolve(result);
        }
      });
    });
  } catch (error) {
    console.error("Error reading the file:", error);
    return null;
  }
}
