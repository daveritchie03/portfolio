import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e2e] px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-[#334155]">
          © 2026 {personal.name}
        </p>
        <p className="text-xs text-[#334155]">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
