import { connectToMongoDB } from "@/app/utils/config/mongodb"; // Adjust path as needed
import { Product } from "@/app/utils/models/product";

import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

//property type
interface PropertiesData {
  name: string;
  value: string;
}

//data type
interface ProductData {
  name: string;
  description: string;
  price: number;
  images: string[];
  subcategory: string;
  tag: string;
}


//modifying mongoose connect
async function connectToDb() {
  if (!mongoose.connection.readyState) {
    await connectToMongoDB();
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectToDb();
    const query = (req.nextUrl.searchParams.get("query") as string) || "";
    if (query) {
      const filteredProducts = await Product.find({
        name: { $regex: new RegExp(query, "i") },
      });
      return NextResponse.json({
        status: 200,
        success: true,
        data: filteredProducts,
      });
    } else {
      const allProducts = await Product.find().populate("tag");
      return NextResponse.json({
        status: 200,
        success: true,
        data: allProducts,
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
