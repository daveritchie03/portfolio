"use client";
import { personal } from "@/lib/data";

export default function Hero() {
  return (
    <section className="hero-bg relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#6366f1] mb-6">
          <span className="inline-block w-6 h-px bg-[#6366f1]" />
          Available for Projects
          <span className="inline-block w-6 h-px bg-[#6366f1]" />
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#f1f5f9] mb-4 leading-none">
          {personal.name}
        </h1>

        <p className="text-xl md:text-2xl font-medium text-[#6366f1] mb-6">
          {personal.title}
        </p>

        <p className="text-base md:text-lg text-[#94a3b8] max-w-xl mx-auto mb-10 leading-relaxed">
          {personal.tagline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#6366f1] hover:bg-[#818cf8] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:-translate-y-0.5"
          >
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#1e1e2e] hover:border-[#6366f1] text-[#94a3b8] hover:text-[#f1f5f9] font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {["Platform Developer I", "App Builder", "Administrator"].map((cert) => (
            <span
              key={cert}
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-[#1e1e2e] bg-[#12121a] text-[#94a3b8]"
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#6366f1">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#6366f1" fill="none" strokeWidth="2" />
              </svg>
              Salesforce {cert}
            </span>
          ))}
        </div>
      </div>

      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#334155]">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div> */}
    </section>
  );
}
