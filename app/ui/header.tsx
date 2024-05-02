"use client";
import { useCartContext } from "../providers/cartProvider";

const Header = () => {
  const { cartProducts } = useCartContext();
  return (
    <nav className="border-b flex justify-between p-2">
      <h2 className="text-[24px]">e-shop</h2>
      <p>Cart:{cartProducts.length}</p>
    </nav>
  );
};

export default Header;
