import { useEffect, useState } from "react";
import { fetchProducts } from "../lib/handleForm";
import Hero from "../ui/hero";
import Homeproduct from "../ui/home-product";
import Logo from "../ui/logo";
import { ProductData } from "../lib/definitions";

export default async function Dashboardpage() {
  const myFetch = await fetchProducts();
  const data = myFetch?.data;
  return (
    <main>
      {data && data.length > 0 ? (
        data.map((p: ProductData) => (
          <p key={p._id}>{p.name}</p>
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
