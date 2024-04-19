import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";


const Hero = () => {
  return (
    <div className="h-[85vh] flex flex-col md:flex-row py-10 px-[5%] md:px-[10%] bg-[#988C60]">
      <div className="basis-1/2 flex flex-col justify-center">
        <div className="w-fit text-sm md:text-lg mb-2 pt-0 py-1 text-white px-4 rounded-full bg-[#363833]">
          category
        </div>
        <h1 className="text-3xl md:text-5xl font-semibold w-[80%] mb-2 text-white font-serif">
          Samsung Galaxy s23
        </h1>
        <p className="w-[60%] text-[16px] md:text-lg text-gray-200 mb-10 font-normal">
          unleash whole new levels of creativity, productivity and possibility
        </p>
        <button className="font-semibold bg-white text-black w-fit mb-10 py-3 px-6 rounded-full flex items-center justify-center gap-1">
          Shop now <span><ChevronRightIcon width={17} /></span>
        </button>
      </div>
      <div className="basis-1/2 flex justify-center md:justify-end">
        <Image src="/s23.png" alt="hero image" width={450} height={500} className="mb-[-70px] object-contain h-full w-full" />
      </div>
    </div>
  );
};

export default Hero;
