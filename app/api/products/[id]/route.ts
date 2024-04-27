import { connectToDb } from "@/app/utils/config/mongodb";
import Product from "@/app/utils/models/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDb();

    const { id } = params;

    if (id) {
      const allProductsBySubcategory = await Product.find({ subcategory: id });
      return NextResponse.json({
        status: 200,
        success: true,
        data: allProductsBySubcategory,
      });
    }
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      success: false,
      message: "Failed to fetch product",
      error: error.message,
    });
  }
}
