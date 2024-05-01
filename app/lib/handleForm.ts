import axios from "axios";

/**********************PRODUCTS************************* */
export const fetchProducts = async () => {
  try {
    const response = await fetch("https://https://ecomere-nextjs.vercel.app/api/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};

export const fetchProductsBySubcategory = async (id: string) => {
  try {
    const res = await axios.get(`/api/products/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};

export const getAllSubcategory = async () => {
  try {
    const res = await axios.get("/api/categories");
    return res.data;
  } catch (error) {
    console.error("Error getting category:", error);
    throw error;
  }
};

export const getAllParentCategory = async () => {
  try {
    const res = await axios.get(
      "https://ecomere-nextjs.vercel.app/api/categories/parent"
    );
    return res.data;
  } catch (error) {
    console.error("Error getting category:", error);
    throw error;
  }
};

export const fetchCategoriesByParent = async (id: string) => {
  try {
    const res = await axios.get(`/api/categories/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching category:", error);
  }
};

export const fetchOneParentCategory = async (id: string) => {
  try {
    const res = await axios.get(`/api/categories/parent?id=${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching category:", error);
  }
};

/**********************TAGS************************* */
export const fetchAllTags = async () => {
  try {
    const response = await axios.get("/api/categories/tags");
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};

export const fetchOneTag = async (id: string) => {
  try {
    const res = await axios.get(`/api/categories/tags?id=${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching category:", error);
  }
};
