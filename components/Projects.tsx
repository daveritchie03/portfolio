import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#6366f1] mb-3">
          Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] mb-4">
          Things I&apos;ve shipped
        </h2>
        <p className="text-[#94a3b8] mb-8 max-w-xl">
          Marketing sites built with Next.js — crafted to reflect each brand&apos;s identity and reach their audience effectively.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-xl border border-[#1e1e2e] bg-[#12121a] hover:border-[#6366f1]/50 hover:-translate-y-1 transition-all duration-200 cursor-pointer"
            >
              <div className="w-8 h-0.5 bg-[#6366f1] mb-5 group-hover:w-16 transition-all duration-300" />

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full border border-[#6366f1]/30 bg-[#6366f1]/8 text-[#818cf8] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-[#f1f5f9] mb-3 group-hover:text-[#818cf8] transition-colors">
                {project.name}
              </h3>

              <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex items-center gap-1.5 text-sm font-medium text-[#6366f1] group-hover:text-[#818cf8] transition-colors mt-auto">
                <span>{project.url.replace("https://", "")}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
