import { NextRequest, NextResponse } from "next/server";
import { nodApiRequest } from "../utils/axiosInstance";

export async function GET(req: NextRequest) {
  const queryParams = req.nextUrl.searchParams;
  const params = { search: "", page: 1 };
  const search = queryParams.get("search");
  if (search) {
    params.search = search;
  }
  const page = queryParams.get("page");
  if (page) {
    params.page = +page;
  }
  console.log("111111111111111111111111111111111111111111111111111111111");
  console.log(params);
  console.log("111111111111111111111111111111111111111111111111111111111");
  try {
    const productsData = await nodApiRequest("GET", "/products", params);

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
