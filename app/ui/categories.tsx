import Image from "next/image";

const Categories = () => {
  return (
    <div className="px-[5%] py-[40px] md:px-[10%] md:py-[50px]">
      <h2 className="font-semibold text-lg md:text-[24px] font-serif">Categories</h2>
      <div className="grid grid-cols-3 gap-4 mt-2 md:mt-8 md:flex">
        <div className="bg-white border border-gray-200 rounded-md  py-2 px-2 flex flex-col gap-1 items-center justify-center">
          <div className="bg-white w-full">
            <Image
              src="/laptop.png"
              width={150}
              height={100}
              alt="laptop image"
            />
          </div>
          <p className="text-center font-semibold text-sm w-[80px]">
            Computers & Tablets
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-md py-2 px-2 flex gap-1 flex-col items-center justify-center">
          <div className="text-orange bg-white p-2 rounded-full">
            <Image
              src="/mobile.png"
              width={150}
              height={100}
              alt="laptop image"
            />
          </div>
          <p className="text-center font-semibold text-sm w-[80px]">
            Mobile & Accessories
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-md py-2 px-2 flex gap-1 flex-col items-center justify-center">
          <div className="text-orange bg-white p-2 rounded-full">
            <Image
              src="/theter.png"
              width={150}
              height={100}
              alt="laptop image"
            />
          </div>
          <p className="text-center font-semibold text-sm w-[80px]">
            TV & Home Theater
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-md py-2 px-2 flex gap-1 flex-col items-center justify-center">
          <div className="text-orange bg-white p-2 rounded-full">
            <Image
              src="/headphone.png"
              width={150}
              height={100}
              alt="laptop image"
            />
          </div>
          <p className="text-center font-semibold text-sm w-[80px]">
            Audio & Headphones
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-md py-2 px-2 flex flex-col gap-1 items-center justify-center">
          <div className="text-orange bg-white p-2 rounded-full">
            <Image
              src="/camera.png"
              width={150}
              height={100}
              alt="laptop image"
            />
          </div>
          <p className="text-center font-semibold text-sm w-[80px]">
            Camera and comcordors
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-md py-2 px-2 flex flex-col gap-1 items-center justify-center">
          <div className="text-orange bg-white p-2 rounded-full">
            <Image
              src="/gaming.png"
              width={150}
              height={100}
              alt="laptop image"
            />
          </div>
          <p className="text-center font-semibold text-sm w-[80px]">
            Gaming Equipment
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-md py-2 px-2 flex flex-col gap-1 items-center justify-center">
          <div className="text-orange bg-white p-2 rounded-full">
            <Image
              src="/appliance.png"
              width={150}
              height={100}
              alt="laptop image"
            />
          </div>
          <p className="text-center font-semibold text-sm w-[80px]">
            Home Appliances
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
