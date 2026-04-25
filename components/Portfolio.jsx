'use client'
import { useState } from 'react'
import { projectPortfolio, categories } from '../data/portfolio'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projectPortfolio
    : projectPortfolio.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="eyebrow mb-3">Recent Contracts</p>
          <h2 className="section-heading">Real clients. Real outcomes.</h2>
          <p className="section-sub">
            A focused view of contract engagements where I owned architecture, delivery, or both — across Solution Architecture, API platforms, and headless web.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/25'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((item) => (
            <article key={item.id} className="glass p-6 flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-2">
                {item.client && (
                  <p className="text-sm font-semibold text-orange-300 uppercase tracking-wide">{item.client}</p>
                )}
                <span className="shrink-0 px-3 py-1 rounded-full bg-teal-400/15 text-teal-200 text-xs font-medium border border-teal-300/30">
                  {item.category}
                </span>
              </div>

              <h3 className="text-xl font-display text-white leading-tight mb-3">
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-200 transition-colors inline-flex items-start gap-1.5"
                  >
                    <span>{item.title}</span>
                    <svg className="w-4 h-4 mt-1.5 shrink-0 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  item.title
                )}
              </h3>

              <p className="text-sm text-slate-200 mb-1">
                <span className="text-slate-400">Role:</span> {item.role}
              </p>
              <p className="text-sm text-slate-200 mb-1">
                <span className="text-slate-400">Duration:</span> {item.duration}
              </p>
              <p className="text-sm text-slate-200 mb-3">
                <span className="text-slate-400">Stack:</span> {item.stack}
              </p>

              <p className="text-slate-300/90 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <p className="text-lg">No projects in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
