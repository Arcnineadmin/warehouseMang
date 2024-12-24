import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

const PAGE_SIZE = 10; // Define the number of products per page

export async function GET(req: NextRequest) {
  if (req.method !== "GET") {
    return NextResponse.json({ error: "Method Not Allowed" });
  }

  const queryParams = req.nextUrl.searchParams;
  const search = queryParams.get("search")?.toLowerCase();
  const vendors = queryParams.getAll("vendors[]");
  const productCategories = queryParams.getAll("productCategory[]");
  const minPrice = queryParams.get("minPrice");
  const maxPrice = queryParams.get("maxPrice");
  const minWarranty = queryParams.get("minWarranty");
  const maxWarranty = queryParams.get("maxWarranty");
  const minAvailability = queryParams.get("minAvailability");
  const maxAvailability = queryParams.get("maxAvailability");
  const page = queryParams.get("page");

  // Validate query parameters
  const currentPage = parseInt(page as string) || 1;
  const skip = (currentPage - 1) * PAGE_SIZE;

  // Ensure valid price range
  const minParsed = minPrice ? parseFloat(minPrice as string) : undefined;
  const maxParsed = maxPrice ? parseFloat(maxPrice as string) : undefined;

  // Ensure valid warranty range
  const minWarrantyParsed = minWarranty
    ? parseInt(minWarranty as string)
    : undefined;
  const maxWarrantyParsed = maxWarranty
    ? parseInt(maxWarranty as string)
    : undefined;

  // Ensure valid availability range
  const minAvailabilityParsed = minAvailability
    ? parseInt(minAvailability as string)
    : undefined;
  const maxAvailabilityParsed = maxAvailability
    ? parseInt(maxAvailability as string)
    : undefined;

  // Building the filter
  const where: any = {
    AND: [
      search
        ? {
            OR: [
              { description: { contains: search } },
              { productCode: { contains: search } },
              { productCategory: { contains: search } },
              { productType: { contains: search } },
            ],
          }
        : undefined,
      vendors.length > 0 ? { vendor: { in: vendors } } : undefined,
      productCategories.length > 0
        ? { productCategory: { in: productCategories } }
        : undefined,
      minParsed !== undefined || maxParsed !== undefined
        ? { retailPrice: { gte: minParsed, lte: maxParsed } }
        : undefined,
      minWarrantyParsed !== undefined || maxWarrantyParsed !== undefined
        ? { warrantyTerm: { gte: minWarrantyParsed, lte: maxWarrantyParsed } }
        : undefined,
      minAvailabilityParsed !== undefined || maxAvailabilityParsed !== undefined
        ? {
            availability: {
              gte: minAvailabilityParsed,
              lte: maxAvailabilityParsed,
            },
          }
        : undefined,
    ].filter(Boolean),
  };

  try {
    // Fetch products with pagination and filters
    const products = await prisma.abisisProduct.findMany({
      where,
      skip,
      take: PAGE_SIZE,
      include: {
        Images: true,
        Attributes: true,
        marketField: true,
      },
    });

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

    // Fetch price range
    const priceRange = await prisma.abisisProduct.aggregate({
      _min: { retailPrice: true },
      _max: { retailPrice: true },
    });

    // Fetch warranty term range
    const warrantyTermRange = await prisma.abisisProduct.aggregate({
      _min: { warrantyTerm: true },
      _max: { warrantyTerm: true },
    });

    // Fetch availability range
    const availabilityRange = await prisma.abisisProduct.aggregate({
      _min: { availability: true },
      _max: { availability: true },
    });

    // Safe serialization for BigInt values
    const safeProducts = products.map((product) => ({
      ...product,
      retailPrice: product.retailPrice
        ? product.retailPrice.toString()
        : undefined,
    }));

    const totalCount = await prisma.abisisProduct.count({ where });

    return NextResponse.json({
      data: safeProducts,
      total: totalCount,
      currentPage,
      pageSize: PAGE_SIZE,
      totalPages: Math.ceil(totalCount / PAGE_SIZE),
      filters: {
        uniqueVendors: uniqueVendors.map((item) => item.vendor),
        uniqueCategories: uniqueCategories.map((item) => item.productCategory),
        minPrice: priceRange._min.retailPrice,
        maxPrice: priceRange._max.retailPrice,
        minWarrantyTerm: warrantyTermRange._min.warrantyTerm,
        maxWarrantyTerm: warrantyTermRange._max.warrantyTerm,
        minAvailability: availabilityRange._min.availability,
        maxAvailability: availabilityRange._max.availability,
      },
    });
  } catch (error) {
    console.error(error); // Logging error for debugging purposes
    return NextResponse.json({ error: "Failed to fetch products or filters" });
  }
}
