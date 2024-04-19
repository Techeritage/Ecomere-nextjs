import Hero from "./ui/hero";
import Logo from "./ui/logo";
import Categories from "./ui/categories";
import Homeproduct from "./ui/home-product";
import Deals from "./ui/deals";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <Categories />
      </section>
      <section>
        <Homeproduct />
      </section>
      <section>
        <Logo />
      </section>
      <section>
        <Deals />
      </section>
      <section>faqs</section>
    </>
  );
}
