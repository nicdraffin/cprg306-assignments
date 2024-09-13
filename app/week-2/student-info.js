import Link from "next/link";


export default function StudentInfo() {
    return (
        <main>
            <h2>Nic Draffin</h2>
            <Link href="https://github.com/nicdraffin/cprg306-assignments" className="underline text-cyan-600 hover:text-cyan-300">Github Link to project</Link>
        </main> 
    );
}