import NavItem from "./nav-item";

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

    return (
        <nav className=" bg-slate-800">
            <ul className="flex ">
                <NavItem {...home} />   
                <NavItem {...week2} />  
                <NavItem {...week3} />    
            </ul>
        </nav>   
    )
}