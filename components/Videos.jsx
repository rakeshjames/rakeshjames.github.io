import { employmentSummary } from '../data/portfolio'

export default function Videos() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-teal-300/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="eyebrow mb-3">Career Timeline</p>
          <h2 className="section-heading">17+ years of architecture & delivery.</h2>
          <p className="section-sub">
            Roles are presented by sector and scope — emphasising architecture ownership, delivery outcomes, and domain expertise.
          </p>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-7 top-2 bottom-2 w-px bg-gradient-to-b from-teal-400/60 via-teal-400/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {employmentSummary.map((item, index) => (
              <article key={index} className="relative md:pl-20">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-4 top-6 w-7 h-7 -translate-x-1/2 rounded-full bg-[#090d13] border-2 border-teal-400/60 items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-teal-400" />
                </div>

                <div className="glass p-6 md:p-8 hover:border-teal-400/25 transition-colors duration-300">
                  {/* Header row */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight mb-1">{item.role}</h3>
                      <p className="text-teal-300 text-sm font-medium">{item.sector}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
                      <span className="text-xs font-mono text-slate-400">{item.period}</span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-teal-400/10 border border-teal-400/20 text-teal-300 font-medium">{item.tenure}</span>
                    </div>
                  </div>

                  {/* Domain tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.domains.map((d) => (
                      <span key={d} className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400">
                        {d}
                      </span>
                    ))}
                  </div>

                  {/* Summary */}
                  <p className="text-slate-300/90 leading-relaxed text-sm mb-5">{item.summary}</p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400">
                        <svg className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
