import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="./week-2/" className="underline text-cyan-600 hover:text-cyan-300">Week 2 Page</Link>
      <Link href="./week-3/" className="underline text-cyan-600 hover:text-cyan-300">Week 3 Page</Link>
    </main>
  );
}
