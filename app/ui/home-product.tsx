import { ptSans } from "./fonts";
import ProductCard from "./productCard";

const Homeproduct = () => {
  return (
    <div className="px-[5%] md:px-[10%] py-[50px] bg-[#f4f4f4]">
      <h2 className={`${ptSans.className} font-bold text-2xl md:text-3xl text-center mb-3`}>
        Our Products
      </h2>
      <div className="flex gap-6 justify-center mb-8">
        <div className="text-lg text-gray-800 px-4">
          Featured
        </div>
        <div className="text-lg text-gray-800">
          New Arrival
        </div>
        <div className="text-lg text-gray-800">Popular</div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-5">
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
