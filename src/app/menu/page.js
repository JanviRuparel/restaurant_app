import CartButton from "@/component/CartButton/CartButton";
// import { itemList } from "@/data";
import Image from "next/image";
import Link from "next/link";
import HomePage from "@/component/Home/Home";
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
