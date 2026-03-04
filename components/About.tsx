import { personal, stats, award } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-xs font-semibold uppercase tracking-widest text-[#6366f1] mb-3">
          About
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] mb-12">
          Who I am
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Text */}
          <div className="space-y-5">
            <p className="text-[#94a3b8] leading-relaxed text-base">
              {personal.summary}
            </p>
            <p className="text-[#94a3b8] leading-relaxed text-base">
              My Salesforce work spans complex enterprise orgs — designing Apex logic, LWC components, Platform Event architectures, and Einstein Bot experiences at scale. On the full-stack side, I&apos;ve built real-time platforms, SaaS products, and marketing sites using React, Next.js, Node.js, and modern cloud infrastructure.
            </p>
            <p className="text-[#94a3b8] leading-relaxed text-base">
              I care about clean architecture, performance, and systems that are maintainable long after launch.
            </p>

            {/* Award callout */}
            <div className="flex items-start gap-3 mt-6 p-4 rounded-lg border border-[#1e1e2e] bg-[#12121a]">
              <span className="text-xl mt-0.5">🏆</span>
              <div>
                <p className="text-sm font-semibold text-[#f1f5f9]">{award.title}</p>
                <p className="text-xs text-[#94a3b8]">{award.event}</p>
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-1 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl border border-[#1e1e2e] bg-[#12121a] hover:border-[#6366f1]/40 transition-colors"
              >
                <p className="text-3xl font-extrabold text-[#6366f1] mb-1">{stat.value}</p>
                <p className="text-sm text-[#94a3b8]">{stat.label}</p>
              </div>
            ))}

            {/* Salesforce stack highlight */}
            <div className="p-6 rounded-xl border border-[#6366f1]/20 bg-[#6366f1]/5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6366f1] mb-2">
                Salesforce Certified
              </p>
              <ul className="space-y-1">
                {["Platform Developer I", "App Builder", "Administrator"].map((c) => (
                  <li key={c} className="flex items-center gap-2 text-sm text-[#f1f5f9]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
