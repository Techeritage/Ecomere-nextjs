"use client";
import React, { useState, useEffect } from "react";
import { fetchProducts } from "../lib/handleForm";
import { ptSans } from "./fonts";
import ProductCard from "./productCard";
import { ProductData } from "../lib/definitions";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Homeproduct = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState<ProductData[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 4;

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

  const fetchData = async () => {
    const res = await fetchProducts();
    if (res?.data) {
      setProducts(res.data);
      setFilteredProducts(res.data); // Initially display all products
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

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
        <div className="grid grid-cols-2 gap-x-3 gap-y-5 md:gap-x-5 md:grid-cols-4">
          {loading ? (
            <div className="flex justify-center items-center h-40">
              Loading...
            </div>
          ) : (
            filteredProducts &&
            currentProducts.length > 0 &&
            currentProducts.map((p: ProductData) => (
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
          )}
        </div>
      </div>
      {currentProducts.length > 0 && (
        <div className="flex items-center justify-center w-full mt-5">
          <div className="bg-white shadow-sm w-[300px] rounded-full py-2 flex items-center justify-evenly">
            <div>
              <button
                className="flex items-center font-semibold disabled:text-gray-400"
                onClick={() => handlePreviousPage()}
                disabled={currentPage === 1}
              >
                <ChevronLeftIcon width={15} /> <span>Prev</span>
              </button>
            </div>

            <div className="flex items-center">
              {currentPage} / {totalPages}
            </div>
            <div>
              <button
                className="flex items-center font-semibold disabled:text-gray-400"
                onClick={() => handleNextPage()}
                disabled={currentPage === totalPages}
              >
                <span>Next</span>
                <ChevronRightIcon width={15} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homeproduct;
