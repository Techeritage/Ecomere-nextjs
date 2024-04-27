import { connectToDb } from "@/app/utils/config/mongodb";
import { Tag } from "@/app/utils/models/tag";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectToDb();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      const oneTag = await Tag.findById({ _id: id });
      if (!oneTag) {
        return NextResponse.json({ message: "Tag not found" }, { status: 404 });
      }

      return NextResponse.json({
        data: oneTag,
        success: true,
        status: 200,
      });
    } else {
      const allTags = await Tag.find();
      return NextResponse.json({
        status: 200,
        success: true,
        data: allTags,
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