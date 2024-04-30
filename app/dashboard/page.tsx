"use client";
import { useEffect, useState } from "react";
import { fetchProducts } from "../lib/handleForm";
import Hero from "../ui/hero";
import Homeproduct from "../ui/home-product";
import Logo from "../ui/logo";
import { ProductData } from "../lib/definitions";

export default function Dashboardpage() {
  const [products, setProducts] = useState<ProductData[]>([]);

  const fetchData = async () => {
    const res = await fetchProducts();
    if (res?.data) {
      setProducts(res.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main>
      {products.length > 0 ? (
        products.map((p) => (
          <p>{p.name}</p>
        ))
      ) : (
        <p>no product found</p>
      )}
      {/*<section>
        <Hero />
      </section>
      <section>
        <Suspense fallback={<CardsSkeleton />}>
          <Categories />
        </Suspense>
  </section> 
      <section>
        <Homeproduct />
      </section>
      <section>
        <Logo />
      </section> */}
    </main>
  );
}
