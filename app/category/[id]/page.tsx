import { fetchCategoriesByParent } from "@/app/lib/handleForm";

interface data {
  _id:string;
  name:string;
}

export default async function CategoryPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  try {
    const res = await fetchCategoriesByParent(id);
    const data = res.data;

    return (
      <div>
        <div>category</div>
        <div>
          <ul>
          {data.length > 0 && data.map((d:data) => (
            <li key={d._id}>{d.name}</li>
          ))}
          </ul>
        </div>
      </div>
    );

  } catch (error) {
    console.log(error);
    return <p>no data available</p>
  }
  
}
