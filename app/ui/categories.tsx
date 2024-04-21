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
        <div className="gap-2 md:gap-4 hide-scrollbar mt-4 md:mt-8 flex lg:justify-center flex-nowrap overflow-x-scroll">
          {categories &&
            categories.map((cat) => (
              <div
                key={cat._id}
                
                className="h-[150px] min-w-[120px] md:h-[150px] md:w-[130px] rounded-md flex flex-col gap-1 items-center justify-between"
              >
                <div className="p-2 rounded-md flex items-center justify-center w-full h-[100px]" style={{ backgroundColor: `${cat.bgColor}` }}>
                  <Image
                    src={cat.image}
                    width={100}
                    height={80}
                    alt="laptop image"
                    className="object-contain w-[100px] h-[80px]"
                  />
                </div>
                <p className="text-center text-[12px] md:text-[13px]">
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
