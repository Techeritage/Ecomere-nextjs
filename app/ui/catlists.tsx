"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  fetchCategoriesByParent,
  fetchProductsBySubcategory,
} from "../lib/handleForm";
import ProductCard from "./productCard";

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
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(
    null
  );
  const [sortBy, setSortBy] = useState<string>("name");

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

  const handleSort = (sortBy: string) => {
    if (sortBy === "name") {
      const sortedProducts = [...products].sort((a, b) => {
        return a.name.localeCompare(b.name); // Use localeCompare for string comparison
      });
      setProducts(sortedProducts);
    }
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
        <div className="flex gap-1">
          <p>Sort By:</p>
          <select value={sortBy} onChange={(e) => handleSort(e.target.value)}>
            <option value="name">Name</option>
            {/* Add additional sorting options here */}
          </select>
        </div>
      </div>
      <div className="py-[40px]">
        <div className="grid grid-cols-2 gap-x-3 gap-y-5 md:grid-cols-5">
          {loading ? (
            <div className="flex justify-center items-center h-40">
              Loading...
            </div>
          ) : products && products.length > 0 ? (
            products.map((p: ProductData) => (
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
