import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="./week-2/" className="underline text-cyan-600 hover:text-cyan-300">Week 2 Page</Link> <br></br>
      <Link href="./week-3/" className="underline text-cyan-600 hover:text-cyan-300">Week 3 Page</Link> <br></br>
      <Link href="./week-4/" className="underline text-cyan-600 hover:text-cyan-300">Week 4 Page</Link> <br></br>
      <Link href="./week-5/" className="underline text-cyan-600 hover:text-cyan-300">Week 5 Page</Link> <br></br>
    </main>
  );
}
