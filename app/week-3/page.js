import ItemList from "./item-list";
import Link from "next/link";
import NavBar from "../nav/nav-bar";

export default function Page() {
  return (
    <body>
      <header>
        <NavBar />
      </header>
      <main className="bg-slate-700">
        <ItemList />
        
      </main>
    </body>
  );
}
