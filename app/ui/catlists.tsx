"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  fetchCategoriesByParent,
  fetchProductsBySubcategory,
} from "../lib/handleForm";
import ProductCard from "./productCard";

type SortBy = "name" | "price" | "default";

interface ProductData {
  _id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
}

export default function Catlists() {
  const [subcategories, setSubcategories] = useState<ProductData[]>([]);
  const [products, setProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSort, setSelectedSort] = useState<
    "a-z" | "z-a" | "l-h" | "h-l"
  >("a-z"); // Initial sort option
  const [sortedProducts, setSortedProducts] = useState<ProductData[]>([]);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(
    null
  );

  const searchParams = useSearchParams();
  const id = searchParams.get("categoryId");

  async function getSubCat() {
    if (id) {
      const res = await fetchCategoriesByParent(id);
      const data = res.data;
      setSubcategories(data);
      setLoading(false);
      // Set the first subcategory as active if there are subcategories
      if (data.length > 0) {
        setActiveSubcategory(data[0]._id);
        getProductsBySubcategory(data[0]._id);
      }
    }
  }

  async function getProductsBySubcategory(subcategoryId: string) {
    if (subcategoryId) {
      const res = await fetchProductsBySubcategory(subcategoryId);
      if (res.status === 200) {
        setProducts(res.data);
        setActiveSubcategory(subcategoryId);
      }
    }
  }

  useEffect(() => {
    getSubCat();
  }, []);

  useEffect(() => {
    if (products) {
      handleSortChange("a-z");
    }
  }, [products]);

  function SortProducts(
    products: ProductData[],
    sortBy: SortBy,
    order: "asc" | "desc"
  ): ProductData[] {
    if (products.length === 0) {
      return products; // No need to sort an empty array
    }

    // Sort based on the provided sortBy and order
    return products.slice().sort((a, b) => {
      if (sortBy === "name") {
        const nameA = a.name.toLowerCase(); // Ensure case-insensitive sorting
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) return order === "asc" ? -1 : 1;
        if (nameA > nameB) return order === "asc" ? 1 : -1;
        return 0;
      } else if (sortBy === "price") {
        return (a.price - b.price) * (order === "asc" ? 1 : -1);
      } else {
        // Handle default or unexpected sortBy values (optional)
        return 0; // Or throw an error if needed
      }
    });
  }

  const handleSortChange = (newSort: "a-z" | "z-a" | "l-h" | "h-l") => {
    const newSortBy = newSort === "a-z" || newSort === "z-a" ? "name" : "price";
    const newOrder = newSort === "a-z" || newSort === "l-h" ? "asc" : "desc";
    setSortedProducts(SortProducts(products, newSortBy, newOrder));
    setSelectedSort(newSort);
  };

  return (
    <div className="mt-3 px-[3%] md:px-[10%]">
      <div className="flex items-center justify-between border-b">
        <div>
          <ul className="flex gap-4 pl-0 mb-0">
            {subcategories.length > 0 &&
              subcategories.map((cat) => (
                <li
                  className={`text-sm cursor-pointer tracking-wide md:text-[16px] pb-4 text-gray-800 ${
                    activeSubcategory === cat._id ? "active" : ""
                  }`}
                  key={cat._id}
                  onClick={() => getProductsBySubcategory(cat._id)}
                >
                  {cat.name}
                </li>
              ))}
          </ul>
        </div>
        <div className="flex gap-1  pb-4">
          <p>Sort By:</p>
          <div className="flex gap-2">
            <select
              value={selectedSort}
              onChange={(e) =>
                handleSortChange(
                  e.target.value as "a-z" | "z-a" | "l-h" | "h-l"
                )
              }
            >
              <option value="a-z">Alphabetically, A-Z</option>
              <option value="z-a">Alphabetically, Z-A</option>
              <option value="l-h">Price, low to high</option>
              <option value="h-l">Price, high to low</option>
            </select>
          </div>
        </div>
      </div>
      <div className="py-[40px]">
        <div className="grid grid-cols-2 gap-x-3 gap-y-5 md:grid-cols-5">
          {loading ? (
            <div className="flex justify-center items-center h-40">
              Loading...
            </div>
          ) : products && sortedProducts.length > 0 ? (
            sortedProducts.map((p: ProductData) => (
              <ProductCard
                key={p._id}
                name={p.name}
                desc={p.description}
                price={p.price}
                id={p._id}
                images={p.images}
                href={"/products"}
                bg={"bg-gray-100"}
                btnBg={"bg-white"}
              />
            ))
          ) : (
            <p>No product found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
