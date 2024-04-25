import { getAllParentCategory } from "../lib/handleForm"

export default async function Test() {
  
    const res = await getAllParentCategory();
    const data = res?.data;
    console.log(data);
    return (
      <div>
        test
      </div>
    )
}
