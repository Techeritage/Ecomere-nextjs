import { connectToDb } from "@/app/utils/config/mongodb";
import Product from "@/app/utils/models/product";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function GET(req: NextRequest) {
  try {
    await connectToDb();
    const allProducts = await Product.find().populate("tag");
    return NextResponse.json({
      status: 200,
      success: true,
      data: allProducts,
    });
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
