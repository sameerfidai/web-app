export default function About() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-lg font-[family-name:var(--font-geist-mono)]">
          <p className="mb-8">currently based in atlanta</p>

          <div className="mb-8">
            <p>work:</p>
            <ul className="list-inside mt-2 opacity-70">
              <li>fullstack software engineer - AT&T</li>
            </ul>
          </div>

          <div className="mb-8">
            <p>education:</p>
            <ul className="list-inside mt-2 opacity-70">
              <li>georgia institute of technology</li>
              <li>M.S. in computer science, expected. 2027</li>
            </ul>
            <ul className="list-inside mt-4 opacity-70">
              <li>university of georgia</li>
              <li>B.S. in computer science, 2024</li>
            </ul>
          </div>

          <div className="mb-8">
            <p>interests:</p>
            <ul className="list-inside mt-2 opacity-70">
              <li>building things</li>
              <li>soccer</li>
              <li>basketball</li>
              <li>video games</li>
            </ul>
          </div>

          <div>
            <p>currently:</p>
            <ul className="list-inside mt-2 opacity-70">
              <li>watching soccer</li>
              <li>learning guitar</li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
