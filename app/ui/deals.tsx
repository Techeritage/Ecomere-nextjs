import Image from "next/image";

const Deals = () => {
  return (
    <div className="relative mx-[10%] flex gap-5">
      <div className="w-full bg-[#F2F6FC] h-[260px] rounded-md">
        <Image className="w-full h-full object-contain" src="/drone.png" width={500} height={500} alt="drone image" />
      </div>
      <div className="overflow-hidden relative flex w-full bg-[#257BDF] h-[260px] rounded-md">
        <div className="pl-5 basis-1/2 flex flex-col justify-center items-start">
          <h2 className="mb-1 text-[24px] text-white">New drou watch series</h2>
          <h2 className="mb-5 text-2xl font-bold text-gray-200">
            Sell $500
          </h2>
          <button className="bg-orange font-medium text-lg text-white py-2 px-8 rounded-full">
            Shop Now
          </button>
        </div>
        <div className="relative basis-1/2">
          <div className="rounded-br-md absolute w-full right-[-30px] bottom-[-35px] bg-[#181A37] h-[250px] rounded-full"></div>
        </div>
        <Image
          className="h-full w-full object-cover absolute right-0 bottom-0"
          src="/wrist_watch.png"
          width={500}
          height={500}
          alt="drone image"
        />
      </div>
    </div>
  );
};

export default Deals;
