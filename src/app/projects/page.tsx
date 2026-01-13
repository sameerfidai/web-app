import { projects } from "@/data/projects"

export default function Projects() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-lg font-[family-name:var(--font-geist-mono)]">
          {projects.map((project, idx) => (
            <div key={idx} className="mb-8">
              <p>{project.name}:</p>
              <ul className="list-inside mt-2 opacity-70">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
                <li>{project.tech.join(", ")}</li>
                <li>
                  <a
                    href={project.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-all duration-200"
                  >
                    {project.link.label}
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
