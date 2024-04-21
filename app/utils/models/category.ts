import mongoose, { Schema, model, models } from "mongoose";

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
  models.subcategories || model("subcategories", SubcategorySchema);
