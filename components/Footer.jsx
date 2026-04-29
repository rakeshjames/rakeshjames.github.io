import { siteConfig } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-teal-300/10 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-2 text-center">
        <p className="text-slate-400 text-sm">
          © {year} <span className="text-white font-medium">Rakesh James</span>.
        </p>
      </div>
    </footer>
  )
}
