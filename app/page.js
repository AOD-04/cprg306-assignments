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
          <Link href="/week-3">week-3</Link>
        </li>
        <li>
          <Link href="/week-4">week-4</Link>
        </li>
        <li>
          <Link href="/week-5">week-5</Link>
        </li>
        <li>
          <Link href="/week-6">week-6</Link>
        </li>
        <li>
          <Link href="/week-7">week-7</Link>
        </li>
        <li>
          <Link href="week-8">week-8</Link>
        </li>
        <li>
          <Link href="week-9">week-9</Link>
        </li>
        <li>
          <Link href="week-10">week-10</Link>
        </li>
      </ul>
    </main>
  );
}

