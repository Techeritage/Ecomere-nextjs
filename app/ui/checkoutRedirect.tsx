"use client";

import { LockClosedIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCartContext } from "../providers/cartProvider";

export default function CheckoutRedirect() {
  const { cartProducts } = useCartContext();
  const [singleItem, setSingleItem] = useState(1);

  useEffect(() => {
    const itemNumber = cartProducts.length;
    setSingleItem(itemNumber);
  }, [cartProducts]);

  return (
    <div className="bg-white w-full rounded-md shadow-md">
      <div className="flex justify-between p-3 border-b">
        <p className="font-semibold">Order Summary</p>
        <p className="font-semibold">
          {singleItem} {singleItem <= 1 ? "Item" : "Items"}
        </p>
      </div>
      <div className="flex justify-between p-3 border-b">
        <p className="basis-[60%] whitespace-nowrap text-sm">
          Delivery Charges:
        </p>
        <p className="basis-[40%] text-center text-xs">
          Add your Delivery address at checkout to see delivery charges
        </p>
      </div>
      <div className="flex p-3 border-b">
        <p className="basis-[60%] whitespace-nowrap font-semibold">Subtotal:</p>
        <p className="basis-[40%] text-center font-semibold">$1,509,300</p>
      </div>
      <div className="flex items-center justify-center p-3 border-b">
        <button className="bg-orange w-full p-2 rounded text-white text-sm font-semibold">
          Continue to Checkout
        </button>
      </div>
      <div className="flex flex-col">
        <div className="w-full pt-3 px-3 pb-2 flex items-center">
          <p className="text-sm">
            We accept:
            <Image
              className="inline mx-1"
              src="/mastercard.png"
              width={28}
              height={50}
              alt="mastercard.logo"
            />
            <Image
              className="inline mr-1"
              src="/visa.png"
              width={35}
              height={30}
              alt="mastercard.logo"
            />
            <Image
              className="inline"
              src="/verve.png"
              width={40}
              height={30}
              alt="mastercard.logo"
            />
          </p>
        </div>
        <div className="py-3 px-3 border-t">
          <p className="text-center">
            <LockClosedIcon className="inline text-gray-700" width={15} /> <span className="text-xs">Transactions are 100% Safe and Secure</span>
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}
