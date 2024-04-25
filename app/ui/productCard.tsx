import Image from "next/image";
import { ptSans } from "./fonts";
import RatingStar from "./ratingStar";

const ProductCard = ({
  name,
  desc,
  price,
  id,
  images,
}: {
  name: string;
  desc: string;
  price: number;
  id: string;
  images: string[];
}) => {
  return (
    <div className="relative rounded-md bg-white p-3 w-fit flex flex-col justify-center items-center">
      <div className="w-full rounded-lg py-3 mb-1 flex items-center justify-center">
        <Image
          src={images[0]}
          width={100}
          height={70}
          alt="product card image"
          className="w-[70px] object-contain"
        />
      </div>
      <div>
        <RatingStar count={5} />
        <p className="font-semibold mb-1">{name}</p>
        <p className="text-[12px] mb-1 text-gray-600 md:text-sm">
          {desc}
        </p>
        <p className={`${ptSans.className} font-bold text-lg mb-2`}>${price}</p>
      </div>
      <button className="bg-[#f4f4f4] rounded-full w-full p-2 text-sm font-semibold">
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
