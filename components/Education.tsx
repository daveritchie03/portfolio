import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#6366f1] mb-3">
          Education
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] mb-8">
          Academic background
        </h2>

        <div className="max-w-md">
          <div className="p-6 rounded-xl border border-[#1e1e2e] bg-[#12121a] hover:border-[#6366f1]/30 transition-all duration-200">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#f1f5f9] mb-1">
                  {education.degree}
                </h3>
                <p className="text-sm text-[#6366f1] font-medium mb-1">
                  {education.institution}
                </p>
                <p className="text-xs text-[#94a3b8]">{education.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
