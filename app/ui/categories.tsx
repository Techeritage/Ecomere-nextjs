import Image from "next/image";
import { ptSans } from "./fonts";
import { getAllParentCategory } from "../lib/handleForm";
import Link from "next/link";

interface catData {
  name: string;
  image: string;
  bgColor: string;
  _id: string;
}

const Categories = async() => {
  const res = await getAllParentCategory();
  const data = res?.data;

  return (
    <div className="px-[3%] py-[40px] md:px-[10%] md:py-[50px] border-b">
      <h2
        className={`${ptSans.className} font-bold text-center text-xl md:text-2xl`}
      >
        Shop by Categories
      </h2>
      {data.length > 0 && (
        <div className="gap-2 md:gap-4 hide-scrollbar mt-4 md:mt-8 flex lg:justify-center flex-nowrap overflow-x-scroll">
          {data &&
            data.map((cat: catData) => (
              <Link className="text-black no-underline" href={`/category/${cat.name}?categoryId=${cat._id}`} key={cat._id}>
                <div className="min-w-[120px] md:w-[130px] rounded-md flex flex-col gap-1 items-center justify-between">
                  <div
                    className="rounded-md flex items-center justify-center w-full h-[110px]"
                    style={{ backgroundColor: `${cat.bgColor}` }}
                  >
                    <Image
                      src={cat.image}
                      width={90}
                      height={80}
                      alt={`${cat.name} image`}
                    />
                  </div>
                  <p className="text-center font-semibold text-[12px] md:text-[13px]">
                    {cat.name}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
