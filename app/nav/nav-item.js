import Link from "next/link";

export default function NavItem({name, link}) {
    return (
        <li className=" bg-slate-500 m-1 p-2 text-lg font-semibold rounded-lg">
            <Link href={link}>{name}</Link>
        </li>
    );
}