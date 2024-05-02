// pages/api/products/by-ids.ts
import { connectToDb } from "@/app/utils/config/mongodb";
import Product from "@/app/utils/models/product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Ensure the database is connected
    await connectToDb();

    const { ids } = await req.json();
    const validIds = ["6626d549d948297b6f535f74", "662ad308cc4b0ca5e51b209a"];

    if (!Array.isArray(ids)) {
      return NextResponse.json({
        status: 400,
        message: "Invalid data format. Expected an array of IDs.",
      });
    }

    // Fetch products with IDs from the provided list
    const products = await Product.find({
      _id: { $in: ids }, // Find products where _id is in the list of provided IDs
    });

    if (products.length === 0) {
      return NextResponse.json({
        status: 404,
        message: "No products found for the given IDs.",
      });
    }

    // Return the found products
    return NextResponse.json({ status: 200, data: products });
  } catch (error) {
    console.error("Error fetching products by IDs:", error);
    return NextResponse.json({ status: 500, message: "Internal Server Error" });
  }
}
