import Menu from "@/component/Menu/Menu";
import { fetchData } from "@/fetchData";

export default async function Page() {
  const itemList = await fetchData();
  return (
    <div>
      <Menu items={itemList} />
    </div>
  );
}
