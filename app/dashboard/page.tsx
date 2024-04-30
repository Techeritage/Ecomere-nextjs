import Hero from "../ui/hero";
import Homeproduct from "../ui/home-product";
import Logo from "../ui/logo";

export default function Dashboardpage() {
  return (
    <main>
      <section>
        <Hero />
      </section>
      {/*<section>
        <Suspense fallback={<CardsSkeleton />}>
          <Categories />
        </Suspense>
  </section> */}
      <section>
        <Homeproduct />
      </section>
      <section>
        <Logo />
      </section>
    </main>
  );
}
