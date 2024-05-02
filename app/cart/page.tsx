import CartCard from "../ui/cartCard";

export default function CartPage() {
  return (
    <main className="bg-[#f4f4f4] flex flex-col lg:flex-row px-[3%] lg:px-[10%]">
      <section className="basis-3/5">
        <CartCard />
      </section>
      <section></section>
    </main>
  );
}
