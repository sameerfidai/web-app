import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-inside text-lg text-center font-[family-name:var(--font-geist-mono)]">
          <li>
            <a
              className="hover:underline hover:text-blue-500"
              href="https://github.com/sameerfidai"
              target="_blank"
            >
              github
            </a>
          </li>
          <li>
            <a
              className="hover:underline hover:text-blue-500"
              href="https://www.linkedin.com/in/sameerfidai/"
              target="_blank"
            >
              linkedin
            </a>
          </li>
          <li>
            <a
              className="hover:underline hover:text-blue-500"
              href="https://drive.google.com/file/d/1HpdPc4SUfD293uF4bZkY8HpPdjLP0yOG/view?usp=drive_link"
              target="_blank"
            >
              resume
            </a>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:underline hover:text-blue-500"
            >
              projects
            </Link>
          </li>
          <li>
            <Link
              href="/experience"
              className="hover:underline hover:text-blue-500"
            >
              experience
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline hover:text-blue-500">
              about
            </Link>
          </li>
        </ol>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
