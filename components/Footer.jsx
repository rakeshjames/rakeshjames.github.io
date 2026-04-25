import { siteConfig } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-teal-300/10 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">
          © {year} <span className="text-white font-medium">Rakesh James</span>.
          Solution Architect for AI-enabled applications.
        </p>
        <p className="text-xs uppercase tracking-[0.18em] text-teal-200/70">
          Built with Next.js + Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
