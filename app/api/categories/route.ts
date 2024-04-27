import { connectToDb } from "@/app/utils/config/mongodb";
import { SubCategory } from "@/app/utils/models/category";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectToDb();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      const subcateriesByParent = await SubCategory.find({ parent: id });
      if (!subcateriesByParent) {
        return NextResponse.json(
          { message: "Subcategory not found" },
          { status: 404 }
        );
      }

      return NextResponse.json({
        data: subcateriesByParent,
        success: true,
        status: 200,
      });
    } else {
      const allSubcategories = await SubCategory.find().populate("parent");
      return NextResponse.json({
        status: 200,
        success: true,
        data: allSubcategories,
      });
    }
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      success: false,
      message: "Failed to get subcategories",
      error: error.message,
    });
  }
}
