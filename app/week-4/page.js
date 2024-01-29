import NavBar from "../nav/nav-bar";
import NewItem from "./new-item";

export default function Page() {
    return (
      <main className = "bg-slate-700"> 
        <NavBar />
        <NewItem />
      </main>
    );
  }