import NavBar from "../nav/nav-bar";
import NewItem from "./new-item";

export default function Page() {
    return (
      <body>
        <header>
          <NavBar />
        </header>
        <main className="flex justify-center w-full">
          <NewItem />
        </main>
      </body>
    );
  }