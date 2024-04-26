import mongoose, { Schema } from "mongoose";

const tagScchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const SubcategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    parent: {
      type: mongoose.Types.ObjectId,
      ref: "parentCategory",
    },
  },
  { timestamps: true }
);

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 3,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    images: {
      type: [String], // Array of strings representing image URLs
    },
    subcategory: {
      type: mongoose.Types.ObjectId,
      ref: "subcategories",
    },
    tag: {
      type: mongoose.Types.ObjectId,
      ref: "tags",
    },
  },
  { timestamps: true }
);

export const Tag = mongoose.models.tags || mongoose.model("tags", tagScchema);

export const SubCategory =
  mongoose.models.subcategories || mongoose.model("subcategories", SubcategorySchema);

const Product =
  mongoose.models.products || mongoose.model("products", productSchema);
export default Product;
