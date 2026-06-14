'use client'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

const BASE = 'https://dev-drupalamicolimited.pantheonsite.io'

const GRADIENTS = [
  'linear-gradient(135deg, #0d3d3a 0%, #0a121d 50%, #1a1040 100%)',
  'linear-gradient(135deg, #3d1f0d 0%, #0a121d 50%, #0d3d3a 100%)',
  'linear-gradient(135deg, #0d1f3d 0%, #0a121d 50%, #2d1040 100%)',
  'linear-gradient(135deg, #1a0d3d 0%, #0a121d 50%, #0d2d2a 100%)',
  'linear-gradient(135deg, #0d3d1a 0%, #0a121d 50%, #3d0d2d 100%)',
]

function getGradient(id) {
  const hash = parseInt(id.replace(/-/g, '').slice(0, 8), 16)
  return GRADIENTS[hash % GRADIENTS.length]
}

export default function ArticleClient() {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return
    fetch(`${BASE}/jsonapi/node/article/${id}?include=field_image`)
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status}`)
        return res.json()
      })
      .then((json) => { setData(json); setLoading(false) })
      .catch((err) => { setError(err.message); setLoading(false) })
  }, [id])

  if (loading) return (
    <main className="min-h-screen">
      <Navbar />
      <div className="w-full h-80 md:h-[26rem] bg-white/5 animate-pulse" />
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={`h-4 bg-white/10 rounded animate-pulse ${i % 3 === 0 ? 'w-2/3' : 'w-full'}`} />
        ))}
      </div>
    </main>
  )

  if (error || !data) return (
    <main className="min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center" style={{ minHeight: 'calc(100vh - 64px)' }}>
        <p className="text-slate-400">Article not found.</p>
      </div>
    </main>
  )

  const article = data.data
  const { title, created, body } = article.attributes
  const imageFileId = article.relationships?.field_image?.data?.id
  const imageAlt = article.relationships?.field_image?.data?.meta?.alt || title
  const imageFile = data.included?.find((r) => r.type === 'file--file' && r.id === imageFileId)
  const imageUrl = imageFile ? `${BASE}${imageFile.attributes.uri.url}` : null
  const gradient = getGradient(id)
  const date = new Date(created).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Banner */}
      <div className="relative w-full h-80 md:h-[26rem] overflow-hidden">
        {imageUrl ? (
          <>
            <img src={imageUrl} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090d13] via-[#090d13]/55 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0" style={{ background: gradient }}>
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: 'radial-gradient(circle at 25% 40%, rgba(45,212,191,0.25) 0%, transparent 55%), radial-gradient(circle at 75% 70%, rgba(251,146,60,0.2) 0%, transparent 50%)'
            }} />
          </div>
        )}

        <div className="absolute top-20 left-6 z-10">
          <Link href="/#blog" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/15">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to blog
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-mono text-teal-400 mb-3 tracking-widest uppercase">{date}</p>
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">{title}</h1>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-6 py-12 pb-24">
        <div className="article-body" dangerouslySetInnerHTML={{ __html: body?.processed || body?.value || '' }} />
      </div>

      <Footer />
    </main>
  )
}
