import ItemList from "./item-list";
import Link from "next/link";
import NavBar from "../nav/nav-bar";

export default function Page() {
    return (
      <main className = "bg-slate-700"> 
        <NavBar />
        <ItemList />
      </main>
    );
}