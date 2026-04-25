'use client'
import { useState, useEffect } from 'react'
import { siteConfig } from '../data/portfolio'

const navLinks = [
  { href: '#portfolio', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-[#0a121d]/78 backdrop-blur-2xl border-b border-teal-300/15 shadow-lg shadow-black/20' : 'py-5'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group inline-flex items-center gap-3 font-display text-lg md:text-xl font-bold text-white tracking-tight">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-teal-300/30 bg-teal-400/10 text-teal-300 text-xs font-mono">
            RJ
          </span>
          <span>
            {siteConfig.name.split(' ')[0]} <span className="text-teal-300">{siteConfig.name.split(' ').slice(1).join(' ')}</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-300/90 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={siteConfig.resumeFile}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-outline text-sm py-2 px-4"
        >
          Download Architecture Resume
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0b1520]/95 backdrop-blur-2xl border-t border-teal-300/15 px-6 pb-6 pt-4">
          <ul className="flex flex-col gap-5">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-200 hover:text-white text-lg transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={siteConfig.resumeFile} target="_blank" rel="noopener noreferrer" className="btn-primary w-fit text-sm">
                Download Architecture Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
