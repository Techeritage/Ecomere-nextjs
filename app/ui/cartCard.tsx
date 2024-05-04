"use client";

import { useEffect, useState } from "react";
import { useCartContext } from "../providers/cartProvider";
import { fetchCartProduct } from "../lib/handleForm";
import { ProductData, SortBy } from "../lib/definitions";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function CartCard() {
  const { cartProducts, addToCart, removeFromCart, deleteFromCart } =
    useCartContext();
  const [products, setProducts] = useState<ProductData[]>([]);
  const [selectedSort, setSelectedSort] = useState<
    "a-z" | "z-a" | "l-h" | "h-l"
  >("a-z"); // Initial sort option
  const [sortedProducts, setSortedProducts] = useState<ProductData[]>([]);

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

  useEffect(() => {
    // Fetch the products using the IDs from `cartProducts`
    async function fetchProducts() {
      if (cartProducts.length > 0) {
        const res = await fetchCartProduct(cartProducts);
        if (res && res.data) {
          setProducts(res.data);
        }
      }
    }

    fetchProducts();
  }, [cartProducts]);

  useEffect(() => {
    if (products) {
      handleSortChange("a-z");
    }
  }, [products]);

  return (
    <div>
      <div className="relative cart bg-[#f4f4f4] h-[50px] flex items-start justify-between">
        <p className="font-semibold text-lg">Shopping Cart</p>
        <div className="flex gap-1 pt-1 justify-end items-center">
          <p className="text-sm mb-0 text-[#555555] font-semibold md:text-[15px]">
            Sort By:
          </p>
          <div className="flex gap-2">
            <select
              className="bg-transparent text-[#555555] border-0 outline-0 text-sm md:text-[15px]"
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
      <div className="grid gap-4 py-5">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => {
            // Count the occurrences of the product ID in `cartProducts`
            const quantity = cartProducts.filter(
              (id: string) => id === product._id
            ).length;

            return (
              <div
                key={product._id}
                className="bg-white shadow-sm px-2 md:px-4 min-h-[80px] md:min-h-[90px] rounded-md flex justify-between"
              >
                <div className="flex items-center gap-2 basis-[50%]">
                  <div>
                    <Image
                      src={product.images[0]}
                      width={40}
                      height={100}
                      alt={`${product.name} image`}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <p className="font-semibold text-[#333333] truncated text-sm md:text-[15px]">
                    {product.name}
                  </p>
                </div>
                <div className="flex items-center justify-center basis-[20%]">
                  <button
                    className="bg-[#f2f2f2] font-semibold p-1 md:p-2 rounded-full mr-2"
                    onClick={() => removeFromCart(product._id)}
                  >
                    <MinusIcon className="stroke-2" width={18} />
                  </button>
                  <p className="text-[#333333] text-sm md:text-base">
                    {quantity}
                  </p>
                  <button
                    className="bg-[#f4f4f4] ml-2 font-semibold p-1 md:p-2 rounded-full"
                    onClick={() => addToCart(product._id)}
                  >
                    <PlusIcon className="stroke-2" width={18} />
                  </button>
                </div>
                <div className="flex gap-5 items-center justify-end basis-[30%]">
                  <p className="font-semibold text-[#333333] text-sm md:text-base">
                    ${product.price * quantity}
                  </p>
                  <button
                    onClick={() => deleteFromCart(product._id)}
                    className="text-gray-600"
                  >
                    <TrashIcon width={22} />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p>Cart is empty</p>
        )}
      </div>
    </div>
  );
}
