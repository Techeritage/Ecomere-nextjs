import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ptSans } from "./fonts";


const Hero = () => {
  return (
    <div className="bg-[#008080] h-[75vh] flex flex-col md:flex-row px-[5%] md:px-[10%]">
      <div className="basis-1/2 flex flex-col justify-center">
        <h1 className={`${ptSans.className} text-4xl text-white md:text-5xl font-semibold w-[80%] mb-2 font-serif`}>
          Samsung Galaxy s23
        </h1>
        <p className="w-[60%] text-slate-100 text-lg md:text-lg mb-10 font-normal">
          unleash whole new levels of creativity, productivity and possibility
        </p>
        <button className="font-semibold bg-orange text-white w-fit mb-10 py-3 px-6 rounded-full flex items-center justify-center gap-1">
          Shop now <span><ChevronRightIcon width={17} /></span>
        </button>
      </div>
      <div className="relative basis-1/2 w-full h-full ">
        <Image src="/iphone151.png" alt="hero image" width={450} height={500} className="absolute bottom-0" />
      </div>
    </div>
  );
};

export default Hero;
