import mongoose, { Schema } from "mongoose";

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

export const SubCategory =
  mongoose.models.subcategories ||
  mongoose.model("subcategories", SubcategorySchema);
