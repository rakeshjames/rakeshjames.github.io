import Link from 'next/link'

const DRUPAL_API = 'https://live-drupalamicolimited.pantheonsite.io/jsonapi/node/article'

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

async function getArticles() {
  try {
    const res = await fetch(`${DRUPAL_API}?sort=-created&page[limit]=9`, {
      next: { revalidate: false },
    })
    if (!res.ok) return []
    const json = await res.json()
    return json.data || []
  } catch {
    return []
  }
}

export default async function Blogs() {
  const articles = await getArticles()

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

        {articles.length === 0 && (
          <p className="text-slate-400 text-sm">No articles published yet.</p>
        )}

        {articles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((article) => {
              const { title, created, body, path } = article.attributes
              const summary = body?.summary
                ? stripHtml(body.summary)
                : stripHtml(body?.processed || '').slice(0, 160)
              const slug = path?.alias || `/node/${article.id}`
              const url = `https://live-drupalamicolimited.pantheonsite.io${slug}`

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
