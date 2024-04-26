"use client";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import Campaign from "@/app/ui/campaign";
import Catlists from "@/app/ui/catlists";
import { useParams} from "next/navigation";

export default function CategoryPage() {
  const { categoryName }: { categoryName: string } = useParams();
  const decodedName =
    typeof categoryName === "string" ? decodeURIComponent(categoryName) : "";
    
    return (
      <main>
        <section>
          <Campaign name={decodedName} />
        </section>
        <section>
          <Catlists />
        </section>
      </main>
    );
}
