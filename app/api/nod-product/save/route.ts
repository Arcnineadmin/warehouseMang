import fs from "fs";
import path from "path";
import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma"; // Adjust this path to your Prisma client instance
import { NextResponse } from "next/server";

const DOWNLOAD_DIR = path.join(process.cwd(), "nod");
const RESPONSE_FILEPATH = path.join(DOWNLOAD_DIR, "nod_products.json");
const ERROR_FILEPATH = path.join(DOWNLOAD_DIR, "errorProducts.json");

export async function GET() {
  try {
    const filePath = RESPONSE_FILEPATH;
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const products = jsonData.products;

    let errored = 0;
    let saved = 0;

    for (const product of products) {
      const productData: Prisma.NodProductUncheckedCreateInput = {
        productId: product.code || "",
        code: product.code || "",
        ean: product.ean || null,
        title: product.title || "",
        description: product.description || null,
        fullDescription: product.full_description || null,
        minimumQuantity: parseInt(product.minimum_quantity) || 1,
        manufacturerId: product.manufacturer_id || "",
        manufacturerName: product.manufacturer_name || "",
        categoryLevel1Id: parseInt(product.category_level_1_id) || 0,
        categoryLevel1Name: product.category_level_1_name || "",
        categoryLevel2Id: parseInt(product.category_level_2_id) || 0,
        categoryLevel2Name: product.category_level_2_name || "",
        categoryLevel3Id: parseInt(product.category_level_3_id) || 0,
        categoryLevel3Name: product.category_level_3_name || "",
        stock: parseInt(product.stock) || 0,
        reservedStock: 0,
        supplierStock: 0,
        supplierStockDeliveryDate: product.supplier_stock_delivery_date
          ? new Date(product.supplier_stock_delivery_date)
          : null,
        price: parseFloat(product.price) || 0,
        promoPrice: parseFloat(product.promo_price) || 0,
        greenStamp: 0,
        vatPercent: parseFloat(product.vat_percent) || 0,
        isSpecialPrice: product.is_special_price === true,
        length: parseFloat(product.length) || 0,
        width: parseFloat(product.width) || 0,
        height: parseFloat(product.height) || 0,
        lengthUnitOfMeasure: product.length_unit_of_measure || "cm",
        weight: parseFloat(product.weight) || 0,
        weightUnitOfMeasure: product.weight_unit_of_measure || "kg",
        isNew: product.is_new === true,
        isEol: product.is_eol === true,
        isOnDemand: product.is_on_demand === true,
        onDemandDeliveryTime: parseInt(product.on_demand_delivery_time) || 0,
        hasResealed: product.has_resealed === true || false,
        originalProductId: product.original_product_id || null,
        warranty: parseInt(product.warranty) || 0,
        version: product.version || "1.0.0",
      };

      try {
        // Save product to database
        const savedProduct = await prisma.nodProduct.create({
          data: productData,
        });

        // Process images and attributes concurrently
        const BATCH_SIZE = 50;

        const saveAttributesInBatches = async (
          attributes: any[],
          productId: string
        ) => {
          const BATCH_SIZE = 50;
          const batches = [];

          for (let i = 0; i < attributes.length; i += BATCH_SIZE) {
            const batch = attributes.slice(i, i + BATCH_SIZE);
            batches.push(
              prisma.attribute.createMany({
                data: batch.map((attr: any) => ({
                  attributeNameId:
                    attr.attribute_name_id !== undefined
                      ? attr.attribute_name_id
                      : null,
                  attributeName:
                    attr.attribute_name !== undefined
                      ? attr.attribute_name
                      : null,
                  attributeValueId:
                    attr.attribute_value_id !== undefined
                      ? attr.attribute_value_id
                      : null,
                  attributeValue:
                    attr.attribute_value !== undefined
                      ? attr.attribute_value
                      : null,
                  productId: productId, // Ensure productId is a string
                })),
              })
            );
          }
          return Promise.all(batches);
        };

        const [savedPictures, savedAttributes] = await Promise.all([
          product.pictures && Array.isArray(product.pictures)
            ? prisma.picture.createMany({
                data: product.pictures.map((pic: any) => ({
                  pictureId: pic.picture_id || null,
                  pictureUrl: pic.picture_url || null,
                  productId: savedProduct.id,
                })),
              })
            : Promise.resolve(null),
          product.attributes && Array.isArray(product.attributes)
            ? saveAttributesInBatches(product.attributes, savedProduct.id)
            : Promise.resolve(null),
        ]);

        console.log("Product added", productData.code);
        saved++;
      } catch (error) {
        try {
          errored++;
          const failedProductData = product;

          fs.readFile(ERROR_FILEPATH, "utf8", (readError, data) => {
            if (readError) {
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
        console.error("Error saving product:", error);
      }
    }

    return NextResponse.json({
      message: "Products processed successfully.",
      saved,
      errored,
    });
  } catch (error) {
    console.error("Error processing products:", error);
    return NextResponse.json(
      { message: "An error occurred while processing products." },
      { status: 500 }
    );
  }
}
