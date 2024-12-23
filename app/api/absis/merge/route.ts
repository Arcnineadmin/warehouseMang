import fs from "fs";
import path from "path";

const DOWNLOAD_DIR = path.join(process.cwd(), "abisis");
const OUTPUT_FILE_PATH = path.join(DOWNLOAD_DIR, "parsedProductData.json");
const STOCK_OUTPUT_FILE_PATH = path.join(DOWNLOAD_DIR, "productStock.json");
const MERGED_FILEPATH = path.join(DOWNLOAD_DIR, "mergedProducts.json");

export async function GET(req: any) {
  try {
    const filePath1 = OUTPUT_FILE_PATH;
    const filePath2 = STOCK_OUTPUT_FILE_PATH;
    const outputFilePath = MERGED_FILEPATH;

    // Read JSON files
    const file1Content = fs.readFileSync(filePath1, "utf-8");
    const file2Content = fs.readFileSync(filePath2, "utf-8");

    const data1 = JSON.parse(file1Content);
    const data2Content = JSON.parse(file2Content);

    // Extract arrays
    const data1Array = Array.isArray(data1) ? data1 : [];
    const data2Array = Array.isArray(data2Content.PRICE)
      ? data2Content.PRICE
      : [];

    // Validate arrays
    if (!Array.isArray(data1Array) || !Array.isArray(data2Array)) {
      throw new Error(`One or both files do not contain valid arrays.`);
    }

    // Merge logic
    const mergedData = data1Array.map((item1: any) => {
      const match = data2Array.find(
        (item2: any) =>
          item1.WIC === item2.WIC || item1.ProductCode === item2.WIC
      );
      return match ? { ...item1, ...match } : item1;
    });

    // Write merged data to a new file
    fs.writeFileSync(outputFilePath, JSON.stringify(mergedData, null, 2));

    return new Response(
      JSON.stringify({
        message: "Files merged successfully",
        mergedFilePath: outputFilePath,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error merging files:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
