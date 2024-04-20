import {
  GlobeAltIcon,
  TruckIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="grid grid-cols-2 md:flex gap-x-2 gap-y-4 py-4 px-[5%] md:px-[10%] justify-between mb-10">
      <div className="flex items-center gap-2">
        <WalletIcon className="text-gray-800 stroke-1" width={30} />
        <div>
          <p className="font-semibold text-sm m-0">90 DAYS RETURN</p>
          <p className="text-slate-500 text-[12px] m-0">
            If goods have problems
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <GlobeAltIcon className="text-gray-800 stroke-1" width={30} />
        <div>
          <p className="font-semibold text-sm m-0">24/7 SUPPORT</p>
          <p className="text-slate-500 text-[12px] m-0">
            Anywhere in the world
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <TruckIcon className="text-gray-800 stroke-1" width={30} />
        <div>
          <p className="font-semibold text-sm m-0">FREE DELIVERY</p>
          <p className="text-slate-500 text-[12px] m-0">
            When ordering from $500
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Image
          width={30}
          height={30}
          src="/credit-card.png"
          alt="credit card icon"
          //className="w-[50px]"
        />
        <div>
          <p className="font-semibold text-sm m-0">SECURE PAYMENT</p>
          <p className="text-slate-500 text-[12px] m-0">100% secure payment</p>
        </div>
      </div>
    </div>
  );
};

export default Logo;
