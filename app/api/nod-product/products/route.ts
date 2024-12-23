import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { title } from "process";

const PAGE_SIZE = 10; // Define the number of products per page

export async function GET(req: NextRequest) {
  // Ensure only GET requests are allowed
  if (req.method !== "GET") {
    return NextResponse.json({ error: "Method Not Allowed" });
  }

  const queryParams = req.nextUrl.searchParams;
  const search = queryParams.get("search");
  const vendorId = queryParams.get("vendorId");
  const minPrice = queryParams.get("minPrice");
  const maxPrice = queryParams.get("maxPrice");
  const page = queryParams.get("page");

  // Validate query parameters
  const currentPage = parseInt(page as string) || 1;
  const skip = (currentPage - 1) * PAGE_SIZE;

  // Ensure valid price range
  const minParsed = minPrice ? parseFloat(minPrice as string) : undefined;
  const maxParsed = maxPrice ? parseFloat(maxPrice as string) : undefined;

  // Building the filter
  const where: any = {
    AND: [
      search ? { description: { contains: search as string } } : undefined,
      vendorId ? { vendorId: parseInt(vendorId as string) } : undefined,
      minParsed !== undefined && maxParsed !== undefined
        ? { myPrice: { gte: minParsed, lte: maxParsed } }
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

    const totalCount = await prisma.abisisProduct.count({ where });

    return NextResponse.json({
      data: products,
      total: totalCount,
      currentPage,
      pageSize: PAGE_SIZE,
      totalPages: Math.ceil(totalCount / PAGE_SIZE),
    });
  } catch (error) {
    console.error(error); // Logging error for debugging purposes
    return NextResponse.json({ error: "Failed to fetch products" });
  }
}
