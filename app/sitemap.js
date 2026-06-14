const BASE = 'https://rakeshjames.github.io'
const DRUPAL = 'https://dev-drupalamicolimited.pantheonsite.io'

export default async function sitemap() {
  const static_routes = [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
  ]

  try {
    const res = await fetch(
      `${DRUPAL}/jsonapi/node/article?page[limit]=100&fields[node--article]=id,changed`,
      { cache: 'no-store' }
    )
    if (!res.ok) return static_routes
    const json = await res.json()
    const articles = (json.data || []).map((a) => ({
      url: `${BASE}/blog/${a.id}`,
      lastModified: new Date(a.attributes?.changed || Date.now()),
      changeFrequency: 'monthly',
      priority: 0.7,
    }))
    return [...static_routes, ...articles]
  } catch {
    return static_routes
  }
}
