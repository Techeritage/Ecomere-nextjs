import Breadcrumbs from "../ui/breadcrumbs";
import CartCard from "../ui/cartCard";

export default function CartPage() {
  return (
    <main className="bg-[#f4f4f4] px-[3%] py-5 lg:px-[10%]">
      <section>
        <Breadcrumbs
          breadcrumbs={[
            { label: "Home", href: "/" },
            {
              label: "Cart",
              href: "/cart",
              active: true,
            },
          ]}
        />
      </section>
      <div className="flex flex-col lg:flex-row">
        <section className="basis-3/5">
          <CartCard />
        </section>
        <section></section>
      </div>
    </main>
  );
}
