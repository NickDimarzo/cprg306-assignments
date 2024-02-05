import StudentInfo from "./student-info.js";
import NavBar from "../nav/nav-bar";

export default function Page() {
  return (
    <body>
      <header>
      <NavBar/>
      </header>
      <main> 
      <StudentInfo/>
      </main>
    </body>
  );
}