'use client'
import { useState, useEffect, useRef } from 'react'
import { skills, heritageSkills } from '../data/portfolio'

function SkillBar({ name, level }) {
  const [width, setWidth] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), 200)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [level])

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between mb-2">
        <span className="text-slate-200 font-medium text-sm">{name}</span>
        <span className="text-teal-200 text-sm font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-teal-500 to-orange-400 transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-teal-300/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <p className="eyebrow mb-3">Expertise</p>
          <h2 className="section-heading mx-auto">AI Architecture Capabilities</h2>
          <p className="section-sub mx-auto text-center">What I use to design, build, evaluate and secure agentic AI systems in production.</p>
        </div>

        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-x-16 gap-y-8">
          {skills.map(skill => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <h3 className="eyebrow mb-8 text-center">Platform heritage</h3>
          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-8">
            {heritageSkills.map(skill => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
