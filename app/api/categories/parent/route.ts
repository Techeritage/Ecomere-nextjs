import { connectToDb } from "@/app/utils/config/mongodb";
import { ParentCategory } from "@/app/utils/models/parentCategory";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectToDb();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      const oneParentCategory = await ParentCategory.findById({ _id: id });
      if (!oneParentCategory) {
        return NextResponse.json(
          { message: "Parent Category not found" },
          { status: 404 }
        );
      }

      return NextResponse.json({
        data: oneParentCategory,
        success: true,
        status: 200,
      });
    } else {
      const allParentCategories = await ParentCategory.find();
      return NextResponse.json({
        status: 200,
        success: true,
        data: allParentCategories,
      });
    }
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