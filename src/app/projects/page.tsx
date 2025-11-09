export default function Projects() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-lg font-[family-name:var(--font-geist-mono)]">
          <div className="mb-8">
            <p>base explorer:</p>
            <ul className="list-inside mt-2 opacity-70">
              <li>blockchain explorer for coinbase&apos;s base l2 network</li>
              <li>
                wallet balance lookups, transaction history, real-time eth
                pricedata
              </li>
              <li>react, typescript, python, web3.py</li>
              <li>
                <a
                  href="https://base-explorer.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-all duration-200"
                >
                  website →
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <p>fivelegflex:</p>
            <ul className="list-inside mt-2 opacity-70">
              <li>sports betting props analysis app</li>
              <li>real-time data for nba, nfl, and more props</li>
              <li>next.js, javascript, python</li>
              <li>
                <a
                  href="https://fivelegflex.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-all duration-200"
                >
                  website →
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <p>crypto stats:</p>
            <ul className="list-inside mt-2 opacity-70">
              <li>real-time cryptocurrency dashboard</li>
              <li>market statistics and trends</li>
              <li>react, html, css</li>
              <li>
                <a
                  href="https://crypto-stats-app.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-all duration-200"
                >
                  website →
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p>stock bot:</p>
            <ul className="list-inside mt-2 opacity-70">
              <li>stock trend alerts via text</li>
              <li>48-hour price change monitoring</li>
              <li>python</li>
              <li>
                <a
                  href="https://github.com/sameerfidai/stock-news-bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-all duration-200"
                >
                  github →
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
