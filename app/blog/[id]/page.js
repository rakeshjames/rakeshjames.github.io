// Server component — exports generateStaticParams (server-only) to satisfy output: export.
// ArticleClient refetches live data on every page load via the browser.
import ArticleClient from './ArticleClient'

const BASE = 'https://dev-drupalamicolimited.pantheonsite.io'

export async function generateStaticParams() {
  try {
    const res = await fetch(
      `${BASE}/jsonapi/node/article?page[limit]=100&fields[node--article]=id`,
      { cache: 'no-store' }
    )
    if (!res.ok) return []
    const json = await res.json()
    return (json.data || []).map((a) => ({ id: a.id }))
  } catch {
    return []
  }
}

export default function ArticlePage() {
  return <ArticleClient />
}

