import { connectToDb } from "@/app/utils/config/mongodb";
import { ParentCategory } from "@/app/utils/models/parentCategory";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectToDb();
    const allParentCategories = await ParentCategory.find();
    return NextResponse.json({
      status: 200,
      success: true,
      data: allParentCategories,
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      success: false,
      message: "Failed to get parent categories",
      error: error.message,
    });
  }
}
