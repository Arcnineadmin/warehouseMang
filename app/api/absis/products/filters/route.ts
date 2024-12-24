import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  if (req.method !== "GET") {
    return NextResponse.json({ error: "Method Not Allowed" });
  }

  try {
    // Fetch unique vendors
    const uniqueVendors = await prisma.abisisProduct.findMany({
      select: { vendor: true },
      distinct: ["vendor"],
    });

    // Fetch unique categories
    const uniqueCategories = await prisma.abisisProduct.findMany({
      select: { productCategory: true },
      distinct: ["productCategory"],
    });

    // Fetch minimum and maximum prices
    const priceRange = await prisma.abisisProduct.aggregate({
      _min: { retailPrice: true },
      _max: { retailPrice: true },
    });

    // Fetch minimum and maximum warranty terms
    const warrantyTermRange = await prisma.abisisProduct.aggregate({
      _min: { warrantyTerm: true },
      _max: { warrantyTerm: true },
    });

    // Fetch minimum and maximum retail prices
    const retailPriceRange = await prisma.abisisProduct.aggregate({
      _min: { retailPrice: true },
      _max: { retailPrice: true },
    });

    // Fetch minimum and maximum availability
    const availabilityRange = await prisma.abisisProduct.aggregate({
      _min: { availability: true },
      _max: { availability: true },
    });

    return NextResponse.json({
      uniqueVendors: uniqueVendors.map((item) => item.vendor),
      uniqueCategories: uniqueCategories.map((item) => item.productCategory),
      minPrice: priceRange._min.retailPrice,
      maxPrice: priceRange._max.retailPrice,
      minWarrantyTerm: warrantyTermRange._min.warrantyTerm,
      maxWarrantyTerm: warrantyTermRange._max.warrantyTerm,
      minRetailPrice: retailPriceRange._min.retailPrice,
      maxRetailPrice: retailPriceRange._max.retailPrice,
      minAvailability: availabilityRange._min.availability,
      maxAvailability: availabilityRange._max.availability,
    });
  } catch (error) {
    console.error(error); // Logging error for debugging purposes
    return NextResponse.json({
      error: "Failed to fetch filter data",
    });
  }
}
