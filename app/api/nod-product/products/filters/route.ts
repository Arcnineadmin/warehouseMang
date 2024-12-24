import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  if (req.method !== "GET") {
    return NextResponse.json({ error: "Method Not Allowed" });
  }

  try {
    // Fetch unique manufactureNames
    const uniqueManufactureNames = await prisma.nodProduct.findMany({
      select: { manufacturerName: true },
      distinct: ["manufacturerName"],
    });

    // Fetch minimum and maximum price
    const priceRange = await prisma.nodProduct.aggregate({
      _min: { price: true },
      _max: { price: true },
    });

    // Fetch minimum and maximum warranty
    const warrantyRange = await prisma.nodProduct.aggregate({
      _min: { warranty: true },
      _max: { warranty: true },
    });
    const stockRange = await prisma.nodProduct.aggregate({
      _min: { stock: true },
      _max: { stock: true },
    });

    return NextResponse.json({
      uniqueManufactureNames: uniqueManufactureNames.map(
        (item) => item.manufacturerName
      ),
      minPrice: priceRange._min.price,
      maxPrice: priceRange._max.price,
      minWarranty: warrantyRange._min.warranty,
      maxWarranty: warrantyRange._max.warranty,
      minStock: stockRange._min,
      maxStock: stockRange._max,
    });
  } catch (error) {
    console.error(error); // Logging error for debugging purposes
    return NextResponse.json({
      error: "Failed to fetch filter data",
    });
  }
}
