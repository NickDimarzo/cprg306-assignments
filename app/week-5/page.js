import ItemList from "./item-list";
import NavBar from "../nav/nav-bar";

export default function Page() {
    return (
      <body>
        <header>
          <NavBar />
        </header>
        <main className="flex w-full">
          <ItemList />
        </main>
      </body>
    );
  }