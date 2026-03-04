import { skills } from "@/lib/data";

const categoryColors: Record<string, string> = {
  Salesforce: "text-[#818cf8] border-[#818cf8]/30 bg-[#818cf8]/8",
  "Full Stack": "text-[#34d399] border-[#34d399]/30 bg-[#34d399]/8",
  "Architecture & Infra": "text-[#fb923c] border-[#fb923c]/30 bg-[#fb923c]/8",
  Tools: "text-[#a78bfa] border-[#a78bfa]/30 bg-[#a78bfa]/8",
};

const categoryHeadingColors: Record<string, string> = {
  Salesforce: "text-[#818cf8]",
  "Full Stack": "text-[#34d399]",
  "Architecture & Infra": "text-[#fb923c]",
  Tools: "text-[#a78bfa]",
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding px-6 bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#6366f1] mb-3">
          Skills
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] mb-12">
          What I work with
        </h2>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="p-6 rounded-xl border border-[#1e1e2e] bg-[#12121a] hover:border-[#6366f1]/30 transition-all duration-200"
            >
              <h3
                className={`text-xs font-bold uppercase tracking-widest mb-4 ${categoryHeadingColors[category]}`}
              >
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs px-2.5 py-1 rounded-full border font-medium ${categoryColors[category]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
