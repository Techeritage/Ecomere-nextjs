'use client';

import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext<any>(null);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartProducts, setCartProducts] = useState<string[]>([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("cartProducts");
    if (storedProducts) {
      setCartProducts(JSON.parse(storedProducts));
    }
  }, []); // Empty dependency array to run only once on component mount

  function addToCart(productId: string) {
    setCartProducts((prev) => {
      const newCartProducts = [...prev, productId];
      localStorage.setItem("cartProducts", JSON.stringify(newCartProducts));
      return newCartProducts; // Important: return the updated state
    });
  }

  function removeFromCart(productId: string) {
    setCartProducts((prev) => {
      const index = prev.indexOf(productId); // Find the index of the first occurrence
      if (index !== -1) {
        // If the item is found, remove it
        const newCartProducts = [...prev]; // Make a copy of the array
        newCartProducts.splice(index, 1); // Remove one item at the found index
        localStorage.setItem("cartProducts", JSON.stringify(newCartProducts));
        return newCartProducts; // Return the updated array
      }
      return prev; // If the productId is not found, return the previous state
    });
  }
  
  
  function deleteFromCart(productId: string) {
    setCartProducts((prev) => {
      const newCartProducts = prev.filter((id) => id !== productId);
      localStorage.setItem("cartProducts", JSON.stringify(newCartProducts));
      return newCartProducts; // Important: return the updated state
    });
  }
  return (
    <CartContext.Provider
      value={{ cartProducts, setCartProducts, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
