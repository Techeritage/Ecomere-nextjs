import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="relative bg-white shadow-md rounded-lg p-4 w-fit flex flex-col justify-center items-center">
      <Image
        src="/ts2.jpeg"
        width={100}
        height={100}
        alt="product card image"
        className="mb-1"
      />
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
