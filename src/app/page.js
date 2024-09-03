import HomePage from "@/component/Home/Home";
import CartButton from "@/component/CartButton/CartButton";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/logo.svg";
import { fetchData } from "@/fetchData";
// import { itemList } from "@/data";

export default async function Page() {
  const itemList = await fetchData();
  return (
    <div>
      <HomePage items={itemList} />
    </div>
  );
}
