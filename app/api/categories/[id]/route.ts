import { connectToDb } from "@/app/utils/config/mongodb";
import { SubCategory } from "@/app/utils/models/category";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDb();
    const { id } = params;

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
