'use client';

import { useCartContext } from "../providers/cartProvider";

export default function CartCard() {
  const {cartProducts} = useCartContext();
  return (
    <div>
      {cartProducts.length > 0 ? (
        <>
          {cartProducts && cartProducts.map((p: string)=> (
            <p>{p}</p>
          ))}
        </>
      ): (
        <>
          Cart is empty
        </>
      )}

    </div>
  )
}
