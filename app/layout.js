import './globals.css'
import { siteConfig } from '../data/portfolio'

export const metadata = {
  title: `${siteConfig.name} — Portfolio`,
  description: siteConfig.tagline,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
