import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";


const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row lg:px[100%] py-10 px-[5%] bg-gradient-to-b from-[#988C60] to-[#252628]">
      <div className="basis-1/2 flex flex-col justify-center">
        <div className="w-fit text-sm md:text-lg mb-2 py-1 text-white px-4 font-medium rounded-full bg-[#A48F62]">
          category
        </div>
        <h1 className="text-3xl md:text-5xl font-semibold w-[80%] mb-2 text-white font-serif">
          Samsung Galaxy s23
        </h1>
        <p className="w-[60%] text-[16px] md:text-lg text-gray-200 mb-10 font-normal">
          unleash whole new levels of creativity, productivity and possibility
        </p>
        <button className="font-semibold bg-white text-black w-fit py-2 mb-10 md:py-3 px-6 rounded-full flex items-center justify-center gap-1">
          Shop now <span><ChevronRightIcon width={17} /></span>
        </button>
      </div>
      <div className="basis-1/2 flex justify-center md:justify-end">
        <Image src="/s23.png" alt="hero image" width={450} height={500} className="h-[400px] object-contain mb-[-70px] md:h-[450px] md:w-full" />
      </div>
    </div>
  );
};

export default Hero;
