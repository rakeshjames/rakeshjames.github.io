'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const DRUPAL_API = 'https://dev-drupalamicolimited.pantheonsite.io/jsonapi/node/article'
const CACHE_KEY = 'rj_blog_articles'
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes

function formatDate(isoString) {
  if (!isoString) return ''
  return new Date(isoString).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function stripHtml(html) {
  if (!html) return ''
  return html.replace(/<[^>]+>/g, '').trim()
}

function readCache() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const { ts, data } = JSON.parse(raw)
    if (Date.now() - ts > CACHE_TTL) return null
    return data
  } catch { return null }
}

function writeCache(data) {
  try { sessionStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data })) } catch {}
}

// Animated progress bar throbber matching Skills bar gradient
function Throbber() {
  const [progress, setProgress] = useState(0)
  const raf = useRef(null)
  const startRef = useRef(null)

  useEffect(() => {
    const animate = (ts) => {
      if (!startRef.current) startRef.current = ts
      const elapsed = ts - startRef.current
      // Fast to ~70%, then slow crawl to 92%
      const p = elapsed < 2000
        ? Math.min(70, (elapsed / 2000) * 70)
        : Math.min(92, 70 + ((elapsed - 2000) / 8000) * 22)
      setProgress(p)
      raf.current = requestAnimationFrame(animate)
    }
    raf.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf.current)
  }, [])

  return (
    <div className="mb-10">
      {/* Top progress bar */}
      <div className="h-0.5 bg-white/5 rounded-full overflow-hidden mb-8">
        <div
          className="h-full rounded-full bg-gradient-to-r from-teal-500 to-orange-400 transition-none"
          style={{ width: `${progress}%`, transition: 'width 0.3s ease-out' }}
        />
      </div>
      {/* Skeleton cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-white/8 p-6 overflow-hidden relative">
            {/* Shimmer sweep */}
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" style={{ animationDelay: `${i * 0.1}s` }} />
            <div className="h-2.5 rounded-full bg-gradient-to-r from-teal-500/20 to-orange-400/10 w-1/3 mb-5" />
            <div className="h-4 rounded-full bg-white/8 w-5/6 mb-3" />
            <div className="h-3 rounded-full bg-white/5 w-full mb-2" />
            <div className="h-3 rounded-full bg-white/5 w-4/5 mb-2" />
            <div className="h-3 rounded-full bg-white/5 w-3/5 mb-6" />
            <div className="h-3 rounded-full bg-teal-400/15 w-1/4" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Blogs() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const cached = readCache()
    if (cached) {
      setArticles(cached)
      setLoading(false)
      // Revalidate in background
      fetch(`${DRUPAL_API}?sort=-created&page[limit]=9`)
        .then(r => r.ok ? r.json() : null)
        .then(json => { if (json?.data) { writeCache(json.data); setArticles(json.data) } })
        .catch(() => {})
      return
    }
    fetch(`${DRUPAL_API}?sort=-created&page[limit]=9`)
      .then((res) => {
        if (!res.ok) throw new Error(`API responded with ${res.status}`)
        return res.json()
      })
      .then((json) => {
        const data = json.data || []
        writeCache(data)
        setArticles(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="eyebrow mb-3">Writing</p>
          <h2 className="section-heading">Thoughts &amp; articles.</h2>
          <p className="section-sub">
            Notes on architecture, AI-augmented development, Drupal, and the craft of building digital products.
          </p>
        </div>

        {loading && <Throbber />}

        {error && (
          <p className="text-red-400 text-sm">Could not load articles: {error}</p>
        )}

        {!loading && !error && articles.length === 0 && (
          <p className="text-slate-400 text-sm">No articles published yet.</p>
        )}

        {!loading && !error && articles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((article) => {
              const { title, created, body } = article.attributes
              const summary = body?.summary
                ? stripHtml(body.summary)
                : stripHtml(body?.processed || '').slice(0, 160)

              return (
                <article key={article.id} className="glass p-6 flex flex-col group hover:border-teal-400/30 transition-all duration-300">
                  <p className="text-xs font-mono text-slate-500 mb-3">{formatDate(created)}</p>
                  <h3 className="text-base font-semibold text-white leading-snug mb-3 group-hover:text-teal-300 transition-colors duration-200">
                    {title}
                  </h3>
                  {summary && (
                    <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-4 line-clamp-3">
                      {summary}
                    </p>
                  )}
                  <Link
                    href={`/blog/${article.id}`}
                    className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium text-teal-400 hover:text-teal-300 transition-colors duration-200"
                  >
                    Read article
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
