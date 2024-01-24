import ItemList from "./item-list";
import Link from "next/link";

export default function Page() {
    return (
      <main className = "bg-slate-700"> 
        <ItemList />
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <ul>
          <li><Link href="week-2">Week-2</Link></li>
          <li><Link href="week-3">Week-3</Link></li>
          <li><Link href="/">HOME</Link></li>
        </ul> 
      </main>
    );
}