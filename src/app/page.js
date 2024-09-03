import HomePage from "@/component/Home/Home";
import { fetchData } from "@/fetchData";

export default async function Page() {
  const itemList = await fetchData();
  return (
    <div>
      <HomePage items={itemList} />
    </div>
  );
}
