import { useEffect, useState } from "react";
import { fetchProducts } from "../lib/handleForm";
import Hero from "../ui/hero";
import Homeproduct from "../ui/home-product";
import Logo from "../ui/logo";
import { ProductData } from "../lib/definitions";
import axios from "axios";

export default async function Dashboardpage() {
  try {
    const response = await axios.get("https://ecomere-nextjs.vercel.app/api/products");
    const dataPack = response.data;
    // Extract JSON from the response
    return (
      <main>
        {dataPack && dataPack.length > 0 ? (
          dataPack.map((p: ProductData) => <p key={p._id}>{p.name}</p>)
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
  } catch (error) {
    console.error("Error fetching products:", error);
    return <p>Error fetching products</p>;
  }
}
