"use client";

import { useEffect, useState } from "react";
import { useCartContext } from "../providers/cartProvider";
import { fetchCartProduct } from "../lib/handleForm";
import { ProductData } from "../lib/definitions";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function CartCard() {
  const { cartProducts, addToCart, removeFromCart } = useCartContext();
  const [products, setProducts] = useState<ProductData[]>([]);

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

  return (
    <div className="grid gap-4 py-5">
      {products.length > 0 ? (
        products.map((product) => {
          // Count the occurrences of the product ID in `cartProducts`
          const quantity = cartProducts.filter(
            (id: string) => id === product._id
          ).length;

          return (
            <div key={product._id} className="bg-white shadow-lg px-4 min-h-[80px] rounded-2xl flex justify-between">
              <div className="flex items-center gap-2 basis-[37%]">
                <div>
                  <Image
                    src={product.images[0]}
                    width={40}
                    height={100}
                    alt={`${product.name} image`}
                    style={{objectFit: "cover"}}
                  />
                </div>
                <p className="font-semibold text-sm md:text-base">{product.name}</p>
              </div>
              <div className="flex items-center gap-2 basis-[20%]">
                <button className="bg-[#f4f4f4] p-1 rounded-full" onClick={() => addToCart(product._id)}>
                  <PlusIcon width={18} />
                </button>
                <p>{quantity}</p>
                <button className="bg-[#f4f4f4] p-1 rounded-full" onClick={() => removeFromCart(product._id)}>
                  <MinusIcon width={18} />
                </button>
              </div>
              <div className="flex gap-2 items-center justify-end basis-[40%]">
                <p className="font-semibold text-sm md:text-base">${product.price * quantity}</p>
                <button className="text-gray-600"><TrashIcon width={20} /></button>
              </div>
            </div>
          );
        })
      ) : (
        <p>Cart is empty</p>
      )}
    </div>
  );
}
