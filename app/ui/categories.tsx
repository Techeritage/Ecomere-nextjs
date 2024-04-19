import Image from "next/image";
import { ptSans } from "./fonts";

const Categories = () => {
  return (
    <div className="px-[5%] py-[40px] md:px-[10%] md:py-[50px] border-b">
      <h2 className={`${ptSans.className} font-bold text-2xl md:text-3xl`}>Categories</h2>
      <div className="gap-3 md:gap-4 hide-scrollbar mt-3 md:mt-8 flex flex-nowrap overflow-x-scroll">
        <div className="bg-[#B0C4DE] px-2 h-[180px] min-w-[150px] md:h-[214px] md:min-w-[180px] rounded-md flex flex-col gap-1 items-center justify-center">
          <div className="p-2">
            <Image
              src="/laptop.png"
              width={150}
              height={100}
              alt="laptop image"
            />
          </div>
          <p className="text-center text-sm">
            Computers & Tablets
          </p>
        </div>
        <div className="bg-[#F5DEB3] h-[180px] min-w-[150px] md:h-[214px] md:min-w-[180px] rounded-md py-2 px-2 flex gap-1 flex-col items-center justify-center">
          <div className="p-2">
            <Image
              src="/mobile.png"
              width={150}
              height={100}
              alt="laptop image"
            />
          </div>
          <p className="text-center text-sm">
            Mobile & Accessories
          </p>
        </div>
        <div className="bg-[#C8E6C9] h-[180px] min-w-[150px] md:h-[214px] md:min-w-[180px] rounded-md py-2 px-2 flex gap-1 flex-col items-center justify-center">
          <div className="p-2">
            <Image
              src="/theter.png"
              width={150}
              height={100}
              alt="laptop image"
            />
          </div>
          <p className="text-center text-sm">
            TV & Home Theater
          </p>
        </div>
        <div className="bg-[#E1BEE7] h-[180px] min-w-[150px] md:h-[214px] md:min-w-[180px] rounded-md py-2 px-2 flex gap-1 flex-col items-center justify-center">
          <div className="p-2" >
            <Image
              src="/headphone.png"
              width={150}
              height={100}
              alt="laptop image"
            />
          </div>
          <p className="text-center text-sm">
            Audio & Headphones
          </p>
        </div>
        <div className="bg-[#FFF9C4] h-[180px] min-w-[150px] md:h-[214px] md:min-w-[180px] rounded-md py-2 px-2 flex flex-col gap-1 items-center justify-center">
          <div className="p-2">
            <Image
              src="/camera.png"
              width={150}
              height={100}
              alt="laptop image"
            />
          </div>
          <p className="text-center text-sm">
            Camera and comcordors
          </p>
        </div>
        <div className="bg-[#FFCCBC] h-[180px] min-w-[150px] md:h-[214px] md:min-w-[180px] rounded-md py-2 px-2 flex flex-col gap-1 items-center justify-center">
          <div className="p-2">
            <Image
              src="/gaming.png"
              width={150}
              height={100}
              alt="laptop image"
            />
          </div>
          <p className="text-center text-sm">
            Gaming Equipment
          </p>
        </div>
        <div className="bg-[#C8E6C9] h-[180px] min-w-[150px] md:h-[214px] md:min-w-[180px] rounded-md py-2 px-2 flex flex-col gap-1 items-center justify-center">
          <div className="p-2">
            <Image
              src="/appliance.png"
              width={150}
              height={100}
              alt="laptop image"
            />
          </div>
          <p className="text-center text-sm">
            Home Appliances
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
