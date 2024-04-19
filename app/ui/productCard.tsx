import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="relative w-fit flex flex-col justify-center items-center">
      <div className="w-full rounded-lg py-5 mb-1 bg-[#f4f4f4] flex items-center justify-center">
        <Image
          src="/ts2.jpeg"
          width={100}
          height={70}
          alt="product card image"
          className="w-[70px] object-contain"
        />
      </div>
      <div>
        <p className="font-semibold">Tecno Camon 20+</p>
        <p className="text-sm text-gray-600">sharp camera, fast, 5G network</p>
        <p className="font-semibold text-lg mb-2">$200</p>
      </div>
      <button className="rounded-full bg-orange w-full p-2 text-sm text-white font-semibold">
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
