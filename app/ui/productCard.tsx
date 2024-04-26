import Image from "next/image";
import { ptSans } from "./fonts";
import RatingStar from "./ratingStar";
import Link from "next/link";

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
    <Link href='/product' className="no-underline">
      <div className="relative rounded-md bg-white max-w-[200px] h-[290px]">
        <div className="w-full rounded-lg h-[120px] mb-1 flex items-center justify-center">
          <Image
            src={images[0]}
            width={75}
            height={70}
            alt="product card image"
            className="object-contain"
          />
        </div>
        <div className="w-full p-2">
          <RatingStar count={5} />
          <p className="font-semibold text-sm mb-1 text-gray-700">{name}</p>
          <p className="text-[12px] max-h-[40px] truncate ... mb-1 text-gray-600 md:text-sm">{desc}</p>
          <p className={`${ptSans.className} text-black font-bold text-lg mb-2`}>
            ${price}
          </p>
        </div>
        <button className="bg-[#f4f4f4] text-black absolute bottom-2 left-[50%] translate-x-[-50%] rounded-full w-[90%] p-2 text-sm font-semibold">
          Add To Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
