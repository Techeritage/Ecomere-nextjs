import Hero from "./ui/hero";
import Logo from "./ui/logo";
import Categories from "./ui/categories";
import Homeproduct from "./ui/home-product";
import Deals from "./ui/deals";
import { Suspense } from "react";
import { CardsSkeleton } from "./ui/skeletons";

export default function Home() {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section>
        <Suspense fallback={<CardsSkeleton />}>
          <Categories />
        </Suspense>
      </section>
      <section>
        <Suspense fallback="loading...">
          <Homeproduct />
        </Suspense>
      </section>
      <section>
        <Logo />
      </section>

    </main>
  );
}
