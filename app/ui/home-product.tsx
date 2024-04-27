"use client";
import React, { useState, useEffect } from "react";
import { fetchProducts } from "../lib/handleForm";
import { ptSans } from "./fonts";
import ProductCard from "./productCard";
import { ProductData } from "../lib/definitions";

const Homeproduct = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState<ProductData[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filterByCategory = (category: string) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) =>
          product.tag.name.trim().toLowerCase() ===
          category.trim().toLowerCase()
      );
      setFilteredProducts(filtered);
    }
    setActiveCategory(category);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchProducts();
      if (res?.data) {
        setProducts(res.data);
        setFilteredProducts(res.data); // Initially display all products
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="px-[3%] md:px-[10%] py-[40px] bg-[#f4f4f4]">
      <h2
        className={`${ptSans.className} font-bold text-xl md:text-2xl text-center mb-3`}
      >
        Our Products
      </h2>
      <div className="flex gap-3 justify-center mb-8">
        <button
          className={`text-sm tracking-wide md:text-[16px] text-gray-800 pb-1 ${
            activeCategory === "All"
              ? "border-b-2 border-orange font-semibold"
              : ""
          }`}
          onClick={() => filterByCategory("All")}
        >
          All
        </button>
        <button
          className={`text-sm tracking-wide md:text-[16px] text-gray-800 pb-1 ${
            activeCategory === "New Arrival"
              ? "border-b-2 border-orange font-semibold"
              : ""
          }`}
          onClick={() => filterByCategory("New Arrival")}
        >
          New Arrival
        </button>
        <button
          className={`text-sm tracking-wide md:text-[16px] text-gray-800 pb-1 ${
            activeCategory === "Best Seller"
              ? "border-b-2 border-orange font-semibold"
              : ""
          }`}
          onClick={() => filterByCategory("Best Seller")}
        >
          Best Seller
        </button>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-x-3 gap-y-5 md:grid-cols-5">
          {loading ? (
            <div className="flex justify-center items-center h-40">
              Loading...
            </div>
          ) : filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts.map((p: ProductData) => (
              <ProductCard
                key={p._id}
                name={p.name}
                desc={p.description}
                price={p.price}
                id={p._id}
                images={p.images}
                href={"/products"}
                bg={"white"}
                btnBg={"#f4f4f4"}
              />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homeproduct;
