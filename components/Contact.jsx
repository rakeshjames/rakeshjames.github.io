import { siteConfig, projectPortfolio } from '../data/portfolio'

export default function Contact() {
  const featuredProjects = projectPortfolio
    .slice(0, 2)
    .map((project) => project.title)

  return (
    <section id="contact" className="py-24 px-6 border-t border-teal-300/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="eyebrow mb-3">Get In Touch</p>
        <h2 className="section-heading mb-6">Let's Build It Right</h2>
        <p className="text-slate-300/85 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          If you are planning a new product or modernizing an existing one, I can help design and deliver an AI-enabled application that is faster, efficient, and secure.
        </p>
        <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
          Recent examples include {featuredProjects[0]} and {featuredProjects[1]}.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3 text-sm">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
