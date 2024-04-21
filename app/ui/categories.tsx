"use client";
import Image from "next/image";
import { ptSans } from "./fonts";

import { getAllParentCategory } from "../lib/handleForm";
import { useEffect, useState } from "react";

interface catData {
  name: string;
  image: string;
  bgColor: string;
  _id: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<catData[]>([]);

  async function cate() {
    const res = await getAllParentCategory();
    if (res.status === 200) {
      setCategories(res?.data);
    }
  }

  useEffect(() => {
    cate();
  }, []);

  return (
    <div className="px-[5%] py-[40px] md:px-[10%] md:py-[50px] border-b">
      <h2
        className={`${ptSans.className} font-bold text-center text-2xl md:text-3xl`}
      >
        Shop by Categories
      </h2>
      {categories.length > 0 && (
        <div className="gap-3 md:gap-4 hide-scrollbar mt-4 md:mt-8 flex flex-nowrap overflow-x-scroll">
          {categories &&
            categories.map((cat) => (
              <div
                key={cat._id}
                style={{ backgroundColor: `${cat.bgColor}` }}
                className=" relative px-2 h-[180px] min-w-[150px] md:h-[214px] md:min-w-[180px] rounded-md flex flex-col gap-1 items-center justify-center"
              >
                <div className="p-2">
                  <Image
                    src={cat.image}
                    width={150}
                    height={100}
                    alt="laptop image"
                  />
                </div>
                <p className="absolute bottom-2 text-center font-bold text-[12px] text-gray-800">
                  {cat.name}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
