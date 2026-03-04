import { certifications } from "@/lib/data";

const providerColors: Record<string, { badge: string; dot: string }> = {
  Salesforce: {
    badge: "border-[#818cf8]/30 bg-[#818cf8]/8 text-[#818cf8]",
    dot: "bg-[#818cf8]",
  },
  HackerRank: {
    badge: "border-[#34d399]/30 bg-[#34d399]/8 text-[#34d399]",
    dot: "bg-[#34d399]",
  },
};

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding px-6 bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#6366f1] mb-3">
          Certifications
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] mb-8">
          Credentials
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((group) => {
            const colors = providerColors[group.provider] ?? providerColors["HackerRank"];
            return (
              <div
                key={group.provider}
                className="p-6 rounded-xl border border-[#1e1e2e] bg-[#12121a] hover:border-[#6366f1]/30 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${colors.badge}`}
                  >
                    {group.provider}
                  </span>
                </div>

                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.dot}`} />
                      <span className="text-sm text-[#f1f5f9]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
