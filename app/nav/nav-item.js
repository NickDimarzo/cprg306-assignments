import Link from "next/link";

export default function NavItem({name, link}) {
    return (
        <li className=" bg-slate-500 m-1 p-2 text-lg font-semibold rounded-lg border-2 border-slate-400  hover:border-green-500 hover:text-green-500">
            <Link href={link}>{name}</Link>
        </li>
    );
}