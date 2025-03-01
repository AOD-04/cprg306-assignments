import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p>CPRG 306: Web Development 2 - Assignments</p>
      <ul>
        <li>
          <Link href="/week-2">week-2</Link>
        </li>
        <li>
          <Link href="/week-4">week-4</Link>
        </li>
        <li>
          <Link href="/week-5">week-5</Link>
        </li>
      </ul>
    </main>
  );
}

