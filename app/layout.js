import './globals.css'
import { siteConfig } from '../data/portfolio'

const SITE_URL = 'https://rakeshjames.github.io'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${siteConfig.name} — Solution Architect · AI, Drupal & API Platforms`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  keywords: [
    'Solution Architect', 'Drupal Architect', 'AI Integration', 'Headless CMS',
    'API Platform', 'Apigee', 'Next.js', 'React', 'RAG', 'LLM', 'Azure',
    'Contract Architect', 'Remote Contractor', 'Rakesh James', 'Northwich UK',
    'Drupal 10', 'Symfony', 'Cyber Essentials', 'Entra ID',
  ],
  authors: [{ name: siteConfig.name, url: SITE_URL }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: `${siteConfig.name} Portfolio`,
    title: `${siteConfig.name} — Solution Architect · AI, Drupal & API Platforms`,
    description: siteConfig.tagline,
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Solution Architect`,
    description: siteConfig.tagline,
    creator: '@rakeshjames',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1 },
  },
  alternates: { canonical: SITE_URL },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  url: SITE_URL,
  jobTitle: siteConfig.title,
  description: siteConfig.tagline,
  email: siteConfig.email,
  telephone: siteConfig.mobile,
  address: { '@type': 'PostalAddress', addressLocality: 'Northwich', addressCountry: 'GB' },
  sameAs: [
    siteConfig.linkedin,
    siteConfig.github,
    siteConfig.drupal,
  ],
  knowsAbout: [
    'Solution Architecture', 'Drupal', 'Apigee', 'AI Integration',
    'Headless CMS', 'React', 'Next.js', 'API Platforms', 'Azure', 'LLM', 'RAG',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
