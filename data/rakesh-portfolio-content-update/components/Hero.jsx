import { siteConfig } from '../data/portfolio'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 pt-28 pb-16"
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-300/30 bg-teal-400/10 text-teal-200 text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-teal-300 animate-pulse-soft" />
            {siteConfig.availability.status}
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.96] mb-6 animate-slide-up">
            Shipping
            <br />
            <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-orange-300 bg-clip-text text-transparent">
              AI-Augmented Products
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 font-medium mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {siteConfig.name} · {siteConfig.title}
          </p>

          <p className="text-slate-300 text-lg max-w-2xl mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {siteConfig.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a href="#portfolio" className="btn-primary text-base px-8 py-4">
              See Recent Contracts
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#contact" className="btn-outline text-base px-8 py-4">
              Hire Me for Your Next Build
            </a>
          </div>

          <div className="flex items-center gap-6 mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-300 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-orange-300 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="glass p-7 md:p-8 animate-fade-in">
          <p className="eyebrow mb-4">Impact Snapshot</p>
          <div className="space-y-4">
            {[
              { label: 'Years Delivering', value: '17+' },
              { label: 'Enterprise Clients', value: '40+' },
              { label: 'Drupal Modules Contributed', value: '15+' },
              { label: 'Global Drupal Ranking', value: 'Top 30' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 flex items-center justify-between">
                <p className="text-sm text-slate-300">{item.label}</p>
                <p className="font-display text-2xl text-white">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-teal-300/25 bg-teal-300/10 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.2em] text-teal-200 mb-1">Current Availability</p>
            <p className="text-sm text-slate-200 leading-relaxed">{siteConfig.availability.detail}</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
