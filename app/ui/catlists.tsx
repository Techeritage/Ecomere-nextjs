"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  fetchCategoriesByParent,
  fetchProductsByParent,
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
  const [subcategories, setSubcatgories] = useState<ProductData[]>([]);
  const [products, setProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(
    null
  );
  const searchParams = useSearchParams();
  const id = searchParams.get("categoryId");

  async function getSubCat() {
    if (id) {
      const res = await fetchCategoriesByParent(id);
      const data = res.data;
      setSubcatgories(data);
      setLoading(false);
    }
  }

  async function getProductsByParent() {
    if (id) {
      const res = await fetchProductsByParent(id);
      if (res.status === 200) {
        console.log(res);
        //setProducts(res.data);
        //setActiveSubcategory(subcategoryId);
      }
    }
  }

  useEffect(() => {
    getSubCat();
    getProductsByParent();
  }, []);
  return (
    <div className="mt-3 px-[3%] md:px-[10%]">
      <div className="flex items-center justify-between">
        <div>
          <ul className="flex gap-2 pl-0">
            <li className="text-sm tracking-wide md:text-[16px] text-gray-800 pb-1">
              All
            </li>
            {subcategories.length > 0 &&
              subcategories.map((cat) => (
                <li
                  className={`text-sm tracking-wide md:text-[16px] text-gray-800 pb-1 ${
                    activeSubcategory === cat._id ? "active" : ""
                  }`}
                  key={cat._id}
                >
                  {cat.name}
                </li>
              ))}
          </ul>
        </div>
        <div>
          <p>Sort By:</p>
        </div>
      </div>
      <div>
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
              />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
