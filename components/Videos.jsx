import { siteConfig } from '../data/portfolio'

const CAREER_START_YEAR = 2008
const CAREER_START_MONTH = 8

function getExperienceYears() {
  const now = new Date()
  const years = now.getFullYear() - CAREER_START_YEAR
  const hasReachedAnniversary = now.getMonth() >= CAREER_START_MONTH

  return hasReachedAnniversary ? years : years - 1
}

const experienceYears = `${getExperienceYears()}+`

const stats = [
  { value: experienceYears, label: 'Years delivering' },
  { value: '10+', label: 'Enterprise contracts' },
  { value: '15+', label: 'Open-source modules' },
  { value: 'Top 30', label: 'Global Drupal contributor' },
]

const strengths = [
  {
    title: 'Speed to value',
    body: 'AI and headless features shipped in weeks, not months — with the architecture to scale them.',
    gradient: 'from-teal-400/20 to-teal-400/0',
    accent: 'bg-teal-400',
  },
  {
    title: 'End-to-end ownership',
    body: 'From blank whiteboard to production deployment. I own the outcome, not just a ticket.',
    gradient: 'from-orange-400/20 to-orange-400/0',
    accent: 'bg-orange-400',
  },
  {
    title: 'Enterprise-grade delivery',
    body: 'Azure Foundry, Acquia and Pantheon Cloud, Azure Logic Apps, API proxies, and Azure Entra ID — enterprise delivery patterns baked in from day one.',
    gradient: 'from-violet-400/20 to-violet-400/0',
    accent: 'bg-violet-400',
  },
  {
    title: 'Cross-sector credibility',
    body: 'Pharma, logistics, retail, public sector, global NGOs — patterns that work, applied with context.',
    gradient: 'from-sky-400/20 to-sky-400/0',
    accent: 'bg-sky-400',
  },
]

export default function Videos() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-teal-300/10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="eyebrow mb-3">Experience</p>
          <h2 className="section-heading">{experienceYears} years of architecture &amp; delivery.</h2>
          <p className="section-sub">
            Independent Solution Architect across pharma, public sector, retail, and global media — owning architecture, delivery, and outcomes end-to-end.
          </p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden mb-16">
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-[#090d13] px-8 py-8 flex flex-col gap-1">
              <span className="text-4xl font-bold text-white tracking-tight">{value}</span>
              <span className="text-sm text-slate-400">{label}</span>
            </div>
          ))}
        </div>

        {/* Summary prose */}
        <p className="text-slate-200 text-xl leading-relaxed max-w-3xl mb-16">
          I bridge the gap between business intent and technical delivery. As a senior independent Solution Architect, I take ownership of the full stack — architecture decisions, stakeholder alignment, team direction, and shipped outcomes.
        </p>

        {/* Strength cards — borderless, gradient accent */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {strengths.map(({ title, body, gradient, accent }) => (
            <div key={title} className={`relative rounded-2xl p-px bg-gradient-to-br ${gradient}`}>
              <div className="rounded-2xl bg-[#090d13] p-7 h-full">
                <div className={`w-1 h-8 rounded-full ${accent} mb-5`} />
                <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex flex-wrap gap-4">
          <a href={`mailto:${siteConfig.email}`} className="btn-primary text-sm">
            Let&apos;s talk about your project
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
            View LinkedIn profile
          </a>
        </div>

      </div>
    </section>
  )
}
