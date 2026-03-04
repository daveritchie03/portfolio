import { personal } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="section-padding px-6 bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6366f1] mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#f1f5f9] mb-6 leading-tight">
            Let&apos;s build something.
          </h2>
          <p className="text-[#94a3b8] mb-10 text-base leading-relaxed">
            Have a Salesforce challenge, a full-stack product to build, or just want to connect? I&apos;m always open to interesting conversations.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#6366f1] hover:bg-[#818cf8] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:-translate-y-0.5"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              {personal.email}
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg border border-[#1e1e2e] hover:border-[#6366f1]/50 text-[#94a3b8] hover:text-[#f1f5f9] font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg border border-[#1e1e2e] hover:border-[#6366f1]/50 text-[#94a3b8] hover:text-[#f1f5f9] font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
