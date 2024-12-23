// pages/api/saveProducts.js

import fs from "fs";
import path from "path";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
const DOWNLOAD_DIR = path.join(process.cwd(), "abisis");
const MERGED_FILEPATH = path.join(DOWNLOAD_DIR, "mergedProducts.json");
const ERROR_FILEPATH = path.join(DOWNLOAD_DIR, "errorProducts.json");

export async function GET(req: any) {
  let errored = 0;
  let saved = 0;
  try {
    const filePath = MERGED_FILEPATH;
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));

    for (const product of jsonData) {
      const productData = {
        productCode: product.ProductCode,
        vendor: product.Vendor,
        productType: product.ProductType,
        productCategory: product.ProductCategory,
        description: product.ProductDescription,
        image: product.Image,
        productCard: product.ProductCard,
        warrantyTerm: parseInt(product.WARRANTYTERM, 10),
        availability: parseInt(product.AVAIL, 10),
        retailPrice: product.RETAIL_PRICE
          ? parseFloat(product.RETAIL_PRICE)
          : null,
        myPrice: product.MY_PRICE ? parseFloat(product.MY_PRICE) : null,
        currencyCode: product.CURRENCY_CODE,
        vendorId: parseInt(product.VENDOR_ID, 10),
        groupId: parseInt(product.GROUP_ID, 10),
        ean: product.EAN ? product.EAN + "" : null,
      };

      const imageUrl = product.Images?.Image || "";
      const images = imageUrl
        ? Array.isArray(imageUrl)
          ? imageUrl?.map((ele: any) => ({
              url: ele,
            }))
          : [{ url: imageUrl }]
        : [];

      const attrList = product.AttrList?.element || [];
      const attributes = attrList.map((attr: any) => ({
        name: attr.$.Name,
        value: attr.$.Value,
      }));

      const marketingContent = product.MarketingInfo?.element || "";
      const marketingField = marketingContent
        ? Array.isArray(marketingContent)
          ? marketingContent?.map((content) => ({ content }))
          : [{ content: marketingContent }]
        : [];

      try {
        const BATCH_SIZE = 50;

        for (let i = 0; i < attributes.length; i += BATCH_SIZE) {
          const batchAttributes = attributes.slice(i, i + BATCH_SIZE);

          const savedProduct = await prisma.abisisProduct.create({
            data: {
              ...productData,
              Images: { create: images },
              Attributes: { create: batchAttributes },
              marketField:
                marketingField[0]?.content?.length < 5000
                  ? { create: marketingField[0] }
                  : undefined,
            },
          });

          console.log(`Product ${savedProduct.id} saved successfully.`);
        }
        saved++;
      } catch (error) {
        try {
          errored++;

          // Save failed product data to JSON file
          const failedProductData = product;

          fs.readFile(ERROR_FILEPATH, "utf8", (readError, data) => {
            if (readError) {
              // If the file doesn't exist, create a new file and write the data
              if (readError.code === "ENOENT") {
                fs.writeFile(
                  ERROR_FILEPATH,
                  JSON.stringify([failedProductData], null, 2),
                  (writeError) => {
                    if (writeError) {
                      console.error(
                        "Error creating new failed products file:",
                        writeError
                      );
                    } else {
                      console.log(
                        "Failed product data saved successfully in new file."
                      );
                    }
                  }
                );
              } else {
                console.error("Error reading failed products file:", readError);
              }
            } else {
              const failedProducts: any[] = JSON.parse(data);
              failedProducts.push(failedProductData);

              fs.writeFile(
                ERROR_FILEPATH,
                JSON.stringify(failedProducts, null, 2),
                (writeError) => {
                  if (writeError) {
                    console.error(
                      "Error writing to failed products file:",
                      writeError
                    );
                  } else {
                    console.log("Failed product data saved successfully.");
                  }
                }
              );
            }
          });
        } catch (error) {
          console.error("Error handling failed product data:", error);
        }
      }
    }

    return NextResponse.json({
      message: "Products saved successfully",
      errored,
      saved,
    });
  } catch (error) {
    return NextResponse.json({
      error: "Error saving products",
      errored,
      saved,
    });
  }
}
