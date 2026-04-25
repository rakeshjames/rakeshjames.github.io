// ============================================================
// Google Sheets Live Data Fetcher
// Fetches portfolio items from the Google Sheet on every page load.
//
// Sheet columns (Row 1 = headers):
//   Link        — YouTube URL or direct/Drive image URL
//   Title       — project/video title
//   Category    — e.g. Branding, UI Design, Tour
//   Description — short description
//
// Type (image vs video) is auto-detected from the Link URL.
// The sheet must be shared as "Anyone with the link can view".
// ============================================================

const SHEET_ID = '1AG6DxHOUAJVhstNKFMAPStAnTkd3xJLu9D9JtSumdro'
// CSV format has the most reliable CORS support for public sheets
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`

// Module-level promise cache — Portfolio and Videos share one request per minute
let _promise = null
let _cacheTime = 0
const CACHE_MS = 30_000

/** Detect if a URL is a YouTube link */
function isYouTubeUrl(url) {
  return /youtube\.com|youtu\.be/.test(url)
}

/** Convert a Google Drive share/view link to a direct image URL */
function toDriveImageUrl(url) {
  let m = url.match(/drive\.google\.com\/file\/d\/([^/?&#]+)/)
  if (m) return `https://drive.google.com/uc?export=view&id=${m[1]}`
  m = url.match(/drive\.google\.com\/open\?id=([^&]+)/)
  if (m) return `https://drive.google.com/uc?export=view&id=${m[1]}`
  return url
}

/** Parse a single CSV line respecting quoted fields */
function parseCSVLine(line) {
  const result = []
  let current = ''
  let inQuotes = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') { current += '"'; i++ }
      else inQuotes = !inQuotes
    } else if (ch === ',' && !inQuotes) {
      result.push(current); current = ''
    } else {
      current += ch
    }
  }
  result.push(current)
  return result
}

/** Parse full CSV text into an array of plain objects */
function parseCSV(text) {
  const lines = text.split('\n').filter(l => l.trim())
  if (lines.length < 2) return []
  const headers = parseCSVLine(lines[0]).map(h => h.toLowerCase().trim())
  return lines.slice(1).map(line => {
    const values = parseCSVLine(line)
    const row = {}
    headers.forEach((h, i) => { row[h] = (values[i] ?? '').trim() })
    return row
  })
}

async function _doFetch() {
  const res = await fetch(CSV_URL)
  if (!res.ok) throw new Error(`Sheet fetch failed: ${res.status}`)
  const text = await res.text()
  const rows = parseCSV(text)

  return rows
    .map((row, i) => {
      // Support both 'link' and 'url' column names
      const rawUrl = (row['link'] || row['url'] || '').trim()
      // Use the 'type' column if present ('photos'/'photo' → image, 'videos'/'video' → video)
      // Fall back to URL-based detection if the column is missing or empty
      const rawType = (row['type'] || '').toLowerCase().trim()
      const type = rawType.startsWith('photo') ? 'image'
        : rawType.startsWith('video') ? 'video'
        : isYouTubeUrl(rawUrl) ? 'video' : 'image'
      const url = type === 'image' ? toDriveImageUrl(rawUrl) : rawUrl
      return {
        id: i + 1,
        title: (row['title'] || '').trim(),
        category: (row['category'] || '').trim(),
        description: (row['description'] || '').trim(),
        type,
        url,
        // 'image' alias so Portfolio component works without changes
        image: type === 'image' ? url : rawUrl,
      }
    })
    .filter(item => item.title && item.url)
}

/** Returns a cached promise of sheet items (re-fetches after CACHE_MS) */
export function fetchSheetItems() {
  const now = Date.now()
  if (_promise && now - _cacheTime < CACHE_MS) return _promise
  _cacheTime = now
  _promise = _doFetch().catch(err => {
    console.error('[fetchSheet] Failed to load Google Sheet:', err)
    _promise = null
    throw err
  })
  return _promise
}
