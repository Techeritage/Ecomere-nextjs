import Image from "next/image";
import { ptSans } from "./fonts";

const ProductCard = () => {
  return (
    <div className="relative rounded-md bg-white p-3 w-fit flex flex-col justify-center items-center">
      <div className="w-full rounded-lg py-3 mb-1 flex items-center justify-center">
        <Image
          src="/ts2.jpeg"
          width={100}
          height={70}
          alt="product card image"
          className="w-[70px] object-contain"
        />
      </div>
      <div>
        <p className="font-semibold mb-2">Tecno Camon 20+</p>
        <p className="text-sm text-gray-600">sharp camera, fast, 5G network</p>
        <p className={`${ptSans.className} font-bold text-orange text-lg mb-2`}>$200</p>
      </div>
      <button className="bg-[#f4f4f4] rounded-full w-full p-2 text-sm font-semibold">
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
