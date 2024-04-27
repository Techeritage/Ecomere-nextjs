export type catData = {
  name: string;
  image: string;
  bgColor: string;
  _id: string;
};

export type SortBy = "name" | "price" | "default";

export type ProductData = {
  name: string;
  description: string;
  price: number;
  images: string[];
  subcategory: string;
  tag: { name: string };
  _id: string;
};