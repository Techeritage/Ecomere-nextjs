"use client";
import { fetchCategoriesByParent } from "@/app/lib/handleForm";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface data {
  _id: string;
  name: string;
}

export default function CategoryPage() {
  const [subcategories, setSubcatgories] = useState();
  const { categoryName }: { categoryName: string } = useParams();
  const decodedName =
    typeof categoryName === "string" ? decodeURIComponent(categoryName) : "";

  const searchParams = useSearchParams();
  const id = searchParams.get("categoryId");

  async function getSubCat() {
    if(id) {
      const res = await fetchCategoriesByParent(id);
      const data = res.data;
      setSubcatgories(data);
    } 
  }

  useEffect(() =>{
    getSubCat();
  },[]);
    

    return (
      <main>
        <section>
          <Breadcrumbs
            breadcrumbs={[
              { label: "Home", href: "/" },
              {
                label: decodedName,
                href: "/category",
                active: true,
              },
            ]}
          />
        </section>
      </main>
    );
}
