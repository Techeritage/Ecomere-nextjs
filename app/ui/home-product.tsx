import ProductCard from "./productCard";

const Homeproduct = () => {
  return (
    <div className="px-[10%] py-[50px] my-10 bg-gray-100">
      <h2 className="font-semibold text-[24px] font-serif text-center mb-3">
        Our Produts
      </h2>
      <div className="flex gap-6 justify-center mb-8">
        <div className="text-lg text-white bg-orange py-1 rounded-full px-4">
          Featured
        </div>
        <div className="text-lg text-gray-800">
          New Arrival
        </div>
        <div className="text-lg text-gray-800">Popular</div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Homeproduct;
