import NavItem from "./nav-item";
import Link from "next/link";

export default function NavBar() { 
    
    const home = {
        name: "Home",
        link: "/",
     };

    const week2 = {
        name: "Week 2",
        link: "week-2",
     };

    const week3 = {
        name: "Week 3",
        link: "week-3",
     };

     const week4 = {
        name: "Week 4",
        link: "week-4",
     };

     const week5 = {
        name: "Week 5",
        link: "week-5",
     };

     const week6 = {
        name: "Week 6",
        link: "week-6",
     };

     const week7 = {
        name: "Week 7",
        link: "week-7",
     };

     const week8 = {
        name: "Week 8",
        link: "week-8",
     };

     const week10 = {
        name: "Week 10",
        link: "week-10"
     }

    return (
        <nav className=" bg-slate-800">
            <ul className="flex ">
                <li className="bg-slate-700 m-1 p-2 text-xl font-semibold rounded-lg border-2 border-slate-700  hover:border-green-500 hover:text-green-500">
                    <Link href="/">Home</Link>
                </li>  
                <NavItem {...week2} />  
                <NavItem {...week3} />  
                <NavItem {...week4} />  
                <NavItem {...week5} />
                <NavItem {...week6} />
                <NavItem {...week7} />
                <NavItem {...week8} />
                <NavItem {...week10} />
            </ul>
        </nav>   
    )
}