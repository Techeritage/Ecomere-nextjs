import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="relative p-4 rounded-md shadow-sm w-fit bg-white flex flex-col justify-center items-center">
      <div className="w-full py-5 mb-1 flex items-center justify-center">
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
        <p className="font-semibold text-lg text-orange mb-2">$200</p>
      </div>
      <button className="border rounded-full border-solid border-gray-200 w-full p-1 text-sm font-semibold">
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
