import {
  GlobeAltIcon,
  TruckIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";

const Logo = () => {
  return (
    <div className="flex px-[10%] justify-between mb-10">
      <div className="flex items-center gap-2">
        <WalletIcon className="text-gray-800 stroke-1" width={50} />
        <div>
          <p className="font-semibold">90 DAYS RETURN</p>
          <p className="text-slate-500">If goods have problems</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <GlobeAltIcon className="text-gray-800 stroke-1" width={50} />
        <div>
          <p className="font-semibold">24/7 SUPPORT</p>
          <p className="text-slate-500">Anywhere in the world</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <TruckIcon className="text-gray-800 stroke-1" width={50} />
        <div>
          <p className="font-semibold">FREE DELIVERY</p>
          <p className="text-slate-500">When ordering from $500</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <img
          src="/credit-card.png"
          alt="credit card icon"
          className="w-[50px]"
        />
        <div>
          <p className="font-semibold">SECURE PAYMENT</p>
          <p className="text-slate-500">100% secure payment</p>
        </div>
      </div>
    </div>
  );
};

export default Logo;
