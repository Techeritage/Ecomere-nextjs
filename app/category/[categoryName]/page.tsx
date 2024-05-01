"use client";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import Campaign from "@/app/ui/campaign";
import Catlists from "@/app/ui/catlists";
import { useParams, useSearchParams } from "next/navigation";

export default function CategoryPage() {
  const { categoryName }: { categoryName: string } = useParams();
  const searchParams = useSearchParams();
  const id = searchParams.get("categoryId");

  const decodedName =
    typeof categoryName === "string" ? decodeURIComponent(categoryName) : "";

  return (
    <main>
      <section>
        <Breadcrumbs
          breadcrumbs={[
            { label: "Home", href: "/" },
            {
              label: decodedName,
              href: `/category/${categoryName}?categoryId=${id}`,
              active: true,
            },
          ]}
        />
      </section>
      <section>
        <Campaign name={decodedName} />
      </section>
      <section>
        <Catlists id={id} />
      </section>
    </main>
  );
}
