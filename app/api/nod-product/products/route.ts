import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

const PAGE_SIZE = 10; // Define the number of products per page

export async function GET(req: NextRequest) {
  // Ensure only GET requests are allowed
  if (req.method !== "GET") {
    return NextResponse.json({ error: "Method Not Allowed" });
  }

  const queryParams = req.nextUrl.searchParams;
  const search = queryParams.get("search")?.toLowerCase();
  const vendorsList = queryParams.getAll("vendorsList"); // Updated to handle multiple vendor IDs
  const minPrice = queryParams.get("minPrice");
  const maxPrice = queryParams.get("maxPrice");
  const minWarranty = queryParams.get("minWarranty");
  const maxWarranty = queryParams.get("maxWarranty");
  const minStock = queryParams.get("minStock");
  const maxStock = queryParams.get("maxStock");
  const page = queryParams.get("page");

  // Validate query parameters
  const currentPage = parseInt(page as string) || 1;
  const skip = (currentPage - 1) * PAGE_SIZE;

  // Parse numeric filters
  const minParsedPrice = minPrice ? parseFloat(minPrice) : undefined;
  const maxParsedPrice = maxPrice ? parseFloat(maxPrice) : undefined;
  const minParsedWarranty = minWarranty ? parseInt(minWarranty) : undefined;
  const maxParsedWarranty = maxWarranty ? parseInt(maxWarranty) : undefined;
  const minParsedStock = minStock ? parseInt(minStock) : undefined;
  const maxParsedStock = maxStock ? parseInt(maxStock) : undefined;

  // Building the filter
  const where: any = {
    AND: [
      search
        ? {
            OR: [
              { code: { contains: search } },
              { title: { contains: search } },
              { ean: { contains: search } },
              { description: { contains: search } },
            ],
          }
        : undefined,
      vendorsList.length > 0
        ? {
            vendorId: {
              in: vendorsList.map((vendor) => parseInt(vendor)),
            },
          }
        : undefined,
      minParsedPrice !== undefined || maxParsedPrice !== undefined
        ? { myPrice: { gte: minParsedPrice, lte: maxParsedPrice } }
        : undefined,
      minParsedWarranty !== undefined || maxParsedWarranty !== undefined
        ? { warranty: { gte: minParsedWarranty, lte: maxParsedWarranty } }
        : undefined,
      minParsedStock !== undefined || maxParsedStock !== undefined
        ? { stock: { gte: minParsedStock, lte: maxParsedStock } }
        : undefined,
    ].filter(Boolean),
  };

  try {
    const products = await prisma.nodProduct.findMany({
      where,
      skip,
      take: PAGE_SIZE,
      include: {
        pictures: true,
        attributes: true,
      },
    });

    const totalCount = await prisma.nodProduct.count({ where });

    // Fetch additional filter metadata
    const uniqueManufactureNames = await prisma.nodProduct.findMany({
      select: { manufacturerName: true },
      distinct: ["manufacturerName"],
    });

    const priceRange = await prisma.nodProduct.aggregate({
      _min: { price: true },
      _max: { price: true },
    });

    const warrantyRange = await prisma.nodProduct.aggregate({
      _min: { warranty: true },
      _max: { warranty: true },
    });

    const stockRange = await prisma.nodProduct.aggregate({
      _min: { stock: true },
      _max: { stock: true },
    });

    return NextResponse.json({
      data: products,
      total: totalCount,
      currentPage,
      pageSize: PAGE_SIZE,
      totalPages: Math.ceil(totalCount / PAGE_SIZE),
      filters: {
        manufactures: uniqueManufactureNames.map(
          (item) => item.manufacturerName
        ),
        minPrice: priceRange._min.price,
        maxPrice: priceRange._max.price,
        minWarranty: warrantyRange._min.warranty,
        maxWarranty: warrantyRange._max.warranty,
        minStock: stockRange._min.stock,
        maxStock: stockRange._max.stock,
      },
    });
  } catch (error) {
    console.error(error); // Logging error for debugging purposes
    return NextResponse.json({ error: "Failed to fetch products" });
  }
}
