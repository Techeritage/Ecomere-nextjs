import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";


const Hero = () => {
  return (
    <div className="flex px-[10%] bg-gradient-to-b from-[#988C60] to-[#252628]">
      <div className="basis-1/2 flex flex-col justify-center">
        <div className="w-fit mb-2 py-1 text-white px-4 font-medium rounded-full bg-[#A48F62]">
          category
        </div>
        <h1 className="text-5xl font-semibold w-[80%] mb-2 text-white font-serif">
          Samsung Galaxy s23
        </h1>
        <p className="w-[70%] text-gray-200 mb-10 font-normal">
          unleash whole new levels of creativity, productivity and possibility
        </p>
        <button className="font-semibold bg-white text-black w-fit py-3 px-6 rounded-full flex items-center justify-center gap-1">
          Shop now <span><ChevronRightIcon width={17} /></span>
        </button>
      </div>
      <div className="basis-1/2 flex justify-end">
        <Image src="/s23.png" alt="hero image" width={450} height={500} />
      </div>
    </div>
  );
};

export default Hero;
