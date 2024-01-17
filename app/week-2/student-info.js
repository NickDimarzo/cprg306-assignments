import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <h2>Student Info</h2>
      <ul>
        <li>Name: Nick Dimarzo</li>
        <li>
          GitHub Repo: <Link href="https://github.com/NickDimarzo/cprg306-assignments.git"> cprg306-assignments</Link>

        </li>

      </ul>
    </div>
  );
}