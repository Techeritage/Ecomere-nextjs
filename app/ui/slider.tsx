// components/CarouselComponent.js
"use client";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ptSans } from "./fonts";

const Slider = () => {
  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <div className="bg-[#008080] md:h-[400px] lg:h-[500px] flex flex-col md:flex-row px-[5%] md:px-[8%] lg:px-[10%]">
          <div className="basis-1/2 py-4 flex flex-col justify-center">
            <h1
              className={`${ptSans.className} text-3xl text-white md:text-5xl font-semibold w-[80%] mb-2`}
            >
              Iphone 15 Pro Max
            </h1>
            <p className="w-[80%] text-slate-100 text-lg md:text-lg mb-7 font-normal">
              unleash whole new levels of creativity, productivity and
              possibility
            </p>
            <button className="font-semibold bg-white text-black w-fit mb-7 py-[13px] md:py-3 px-6 rounded-full flex items-center justify-center gap-1">
              Shop now{" "}
              <span>
                <ChevronRightIcon width={17} />
              </span>
            </button>
          </div>
          <div className="md:relative basis-1/2 w-full h-full ">
            <Image
              src="/iphone151.png"
              alt="hero image"
              width={450}
              height={375}
              priority={true}
              className="md:absolute md:bottom-0 md:left-5"
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg-[#008080] md:h-[400px] lg:h-[500px] flex flex-col md:flex-row px-[5%] md:px-[8%] lg:px-[10%]">
          <div className="basis-1/2 py-4 flex flex-col justify-center">
            <h1
              className={`${ptSans.className} text-3xl text-white md:text-5xl font-semibold w-[80%] mb-2`}
            >
              Iphone 15 Pro Max
            </h1>
            <p className="w-[80%] text-slate-100 text-lg md:text-lg mb-7 font-normal">
              unleash whole new levels of creativity, productivity and
              possibility
            </p>
            <button className="font-semibold bg-white text-black w-fit mb-7 py-[13px] md:py-3 px-6 rounded-full flex items-center justify-center gap-1">
              Shop now{" "}
              <span>
                <ChevronRightIcon width={17} />
              </span>
            </button>
          </div>
          <div className="md:relative basis-1/2 w-full h-full ">
            <Image
              src="/iphone151.png"
              alt="hero image"
              width={450}
              height={375}
              priority={true}
              className="md:absolute md:bottom-0 md:left-5"
            />
          </div>
        </div>
      </Carousel.Item>
      {/* Add more Carousel.Item components for additional slides */}
    </Carousel>
  );
};

export default Slider;
