import { siteConfig, aboutText, technicalProfile } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-teal-300/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image column */}
        <div className="relative">
          <div className="relative w-full max-w-sm mx-auto aspect-square rounded-3xl overflow-hidden border border-white/10">
            {/* Fallback colour block if no profile image uploaded */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-cyan-900/50 to-orange-900/45 flex items-center justify-center">
              <span className="text-white/20 font-display text-9xl font-bold select-none">
                {siteConfig.name.charAt(0)}
              </span>
            </div>
            {/* Uncomment below and add /public/images/profile.jpg to show your photo */}
            {/* <Image src="/images/profile.jpg" alt={siteConfig.name} fill className="object-cover" /> */}
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 md:right-4 glass px-5 py-3 flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-white font-medium">Available for UK contracts · Outside IR35 preferred</span>
          </div>
        </div>

        {/* Text column */}
        <div>
          <p className="eyebrow mb-3">About Me</p>
          <h2 className="section-heading mb-6">Architecture that<br />actually ships</h2>
          <p className="text-slate-200 text-lg leading-relaxed mb-8">{aboutText}</p>

          <div className="space-y-3 mb-8">
            {technicalProfile.map((item) => (
              <p key={item} className="text-slate-300/90 leading-relaxed">{item}</p>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {[
              { value: '17+', label: 'Years Delivering' },
              { value: 'Top 30', label: 'Global Drupal Contributor' },
              { value: '40+', label: 'Enterprise Clients' },
            ].map(stat => (
              <div key={stat.label} className="text-center p-4 glass">
                <p className="text-3xl font-bold text-teal-200 font-display">{stat.value}</p>
                <p className="text-slate-400 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Hire Me
            </a>
            <a href={siteConfig.resumeFile} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
