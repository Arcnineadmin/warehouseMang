import { NextRequest, NextResponse } from "next/server";
import { nodApiRequest } from "../utils/axiosInstance";

export async function GET(request: NextRequest) {
  try {
    console.log(request.url);
    const productsData = await nodApiRequest("GET", "/products");

    if (!productsData || productsData.length === 0) {
      return NextResponse.json(
        { message: "No products found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ ...productsData });
  } catch (error) {
    console.error("Error fetching or saving products:", error);
    return NextResponse.json(
      { message: "An error occurred while processing products." },
      { status: 500 }
    );
  }
}
