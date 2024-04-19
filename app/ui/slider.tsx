// components/CarouselComponent.js
'use client';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ptSans } from "./fonts";

const Slider = () => {
  return (
    <Carousel controls={false}>
      <Carousel.Item>
      <div className="bg-[#008080] h-[75vh] md:h-[500px] flex flex-col md:flex-row px-[5%] md:px-[10%]">
      <div className="basis-1/2 flex flex-col justify-center">
        <h1 className={`${ptSans.className} text-4xl text-white md:text-5xl font-semibold w-[80%] mb-2`}>
          Samsung Galaxy s23
        </h1>
        <p className="w-[60%] text-slate-100 text-lg md:text-lg mb-10 font-normal">
          unleash whole new levels of creativity, productivity and possibility
        </p>
        <button className="font-semibold bg-orange text-white w-fit mb-10 py-3 px-6 rounded-full flex items-center justify-center gap-1">
          Shop now <span><ChevronRightIcon width={17} /></span>
        </button>
      </div>
      <div className="relative basis-1/2 w-full">
        <Image src="/iphone151.png" alt="hero image" width={450} height={500} priority={true} className="absolute bottom-0" />
      </div>
    </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="bg-[#008080] h-[75vh] md:h-[500px] flex flex-col md:flex-row px-[5%] md:px-[10%]">
      <div className="basis-1/2 flex flex-col justify-center">
        <h1 className={`${ptSans.className} text-4xl text-white md:text-5xl font-semibold w-[80%] mb-2`}>
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
        <Image src="/iphone151.png" alt="hero image" width={450} height={375} priority={true} className="absolute bottom-0" />
      </div>
    </div>
      </Carousel.Item>
      {/* Add more Carousel.Item components for additional slides */}
    </Carousel>
  );
};

export default Slider;
