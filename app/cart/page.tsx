import Breadcrumbs from "../ui/breadcrumbs";
import CartCard from "../ui/cartCard";
import CheckoutRedirect from "../ui/checkoutRedirect";

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
      <div className="flex justify-between flex-col lg:flex-row">
        <section className="basis-[65%]">
          <CartCard />
        </section>
        <section className="basis-[30%]">
          <CheckoutRedirect />
        </section>
      </div>
    </main>
  );
}
