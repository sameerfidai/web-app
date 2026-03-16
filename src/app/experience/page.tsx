export default function Experience() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-lg font-[family-name:var(--font-geist-mono)]">
          <div className="mb-8">
            <p>december 2025 - present:</p>
            <ul className="list-inside mt-2 opacity-70">
              <li>senior software engineer @ <span className="text-[#00bfff]">AT&T</span></li>
              <li>full stack dev - Daas (Diagnostics as a Service)</li>
              <li>java, spring boot, typescript, angular, react, node.js</li>
            </ul>
          </div>

          <div className="mb-8">
            <p>july 2024 - december 2025:</p>
            <ul className="list-inside mt-2 opacity-70">
              <li>software engineer @ <span className="text-[#00bfff]">AT&T</span></li>
              <li>full stack dev - AT&T business center</li>
              <li>java, spring boot, typescript, angular</li>
            </ul>
          </div>

          <div className="mb-8">
            <p>summer 2023:</p>
            <ul className="list-inside mt-2 opacity-70">
              <li>software engineer intern @ <span className="text-[#00bfff]">AT&T</span></li>
              <li>development of microservices - AT&T fiber</li>
              <li>java, spring boot, azure</li>
            </ul>
          </div>

          <div className="mb-8">
            <p>summer 2022:</p>
            <ul className="list-inside mt-2 opacity-70">
              <li>software engineer intern @ <span className="text-[#00bfff]">AT&T</span></li>
              <li>full stack dev on internal financial application</li>
              <li>python, flask, javascript</li>
            </ul>
          </div>

          <div>
            <p>tech:</p>
            <ul className="list-inside mt-2 opacity-70">
              <li>python, java, c++, javascript, typescript, sql</li>
              <li>spring boot, fast api, node.js, next.js, react, angular, flask</li>
              <li>docker, aws, ci/cd, azure, git, mysql, postgresql, oracle, mongodb</li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
