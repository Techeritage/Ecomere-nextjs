import Image from "next/image";
import { ptSans } from "./fonts";
import RatingStar from "./ratingStar";
import Link from "next/link";
import { useCartContext } from "../providers/cartProvider";

const ProductCard = ({
  name,
  desc,
  price,
  id,
  images,
  href,
  bg,
  btnBg,
}: {
  name: string;
  desc: string;
  price: number;
  id: string;
  images: string[];
  href: string;
  bg: string;
  btnBg: string;
}) => {
  const {addToCart} = useCartContext();
  return (
    <div
      className={`relative rounded-md min-w-[167px] max-w-[200px] lg:min-w-[220px] h-[290px]`}
      style={{ backgroundColor: `${bg}` }}
    >
      <Link href={href} className="no-underline">
        <div className="w-full rounded-lg h-[120px] mb-1 flex items-center justify-center">
          <Image src={images[0]} width={75} height={70} alt={`${name} image`} />
        </div>
        <div className="w-full p-2">
          <RatingStar count={5} />
          <p className="font-semibold text-sm mb-0 truncate ...  text-gray-700">
            {name}
          </p>
          <p className="text-[12px] max-h-[40px] truncate ... mb-1 text-gray-600 md:text-sm">
            {desc}
          </p>
          <p
            className={`${ptSans.className} text-black font-bold text-lg mb-2`}
          >
            ${price}
          </p>
        </div>
      </Link>
      <button
        onClick={() => addToCart(id)}
        className={`text-black absolute bottom-3 left-[50%] translate-x-[-50%] rounded-full w-[90%] p-2 text-sm font-semibold`}
        style={{ backgroundColor: `${btnBg}` }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
