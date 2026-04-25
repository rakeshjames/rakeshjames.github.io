import { employmentSummary } from '../data/portfolio'

export default function Videos() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-teal-300/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="eyebrow mb-3">Experience Summary</p>
          <h2 className="section-heading">Architecture & Delivery Track Record</h2>
          <p className="section-sub">
            Roles are presented with confidentiality in mind and emphasize architecture ownership and measurable delivery outcomes.
          </p>
        </div>

        <div className="space-y-4">
          {employmentSummary.map((item) => (
            <article key={`${item.org}-${item.period}`} className="glass p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <h3 className="text-white font-display text-xl">{item.org}</h3>
                <span className="text-xs uppercase tracking-[0.16em] text-teal-200">{item.period}</span>
              </div>
              <p className="text-slate-200 font-medium mb-2">{item.role}</p>
              <p className="text-slate-300/90 leading-relaxed">{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
