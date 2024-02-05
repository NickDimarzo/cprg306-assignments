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

    return (
        <nav className=" bg-slate-800">
            <ul className="flex ">
                <li className="bg-slate-700 m-1 p-2 text-xl font-semibold rounded-lg">
                    <Link href="/">Home</Link>
                </li>  
                <NavItem {...week2} />  
                <NavItem {...week3} />  
                <NavItem {...week4} />  
            </ul>
        </nav>   
    )
}