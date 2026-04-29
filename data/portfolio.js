// ============================================================
// PORTFOLIO CONFIGURATION
// Edit this file to customize your portfolio
// ============================================================

export const siteConfig = {
  name: 'Rakesh James',
  title: 'Solution Architect — AI, Drupal & API Platforms',
  tagline: 'I architect and ship AI-augmented digital products end-to-end. 17+ years delivering for Royal Mail, Imperial War Museum, AutoZone, WHO, Time Magazine, and WaterAid. Available for remote contracts worldwide (Outside IR35 preferred for UK).',
  github: 'https://github.com/rakeshjames',
  linkedin: 'https://www.linkedin.com/in/rakeshjames',
  drupal: 'https://www.drupal.org/u/rakeshgectcr',
  email: 'rakeshjames20@gmail.com',
  mobile: '+447380804640',
  location: 'Northwich, UK',
  resumeFile: 'https://drive.google.com/file/d/17zZDMKnKt9q-tFeiJaz4wDuDxRGKs6jA/view?usp=sharing',

  // Contract availability — surfaced in Hero & About
  availability: {
    status: 'Available for remote contracts',
    detail: 'Remote-first · UK & international · Outside IR35 preferred for UK · Immediate start',
  },
}

export const aboutText = `I'm a Solution Architect with 17+ years delivering enterprise digital platforms across pharma, public sector, retail, and global agencies. I sit at the intersection of three things modern businesses need at once: a flexible content backbone (Drupal & Symfony), great front-end and developer experience (React, Next.js, Vue, Apigee), and AI capability that actually ships into production (LLM, RAG, semantic search). I'm a recognised open-source contributor — Top-30 global Drupal contributor and author of 15+ contributed modules.`

export const technicalProfile = [
  'End-to-end Solution Architecture: translate ambiguous business goals into modular, secure, scalable systems — and lead the team that builds them.',
  'AI-augmented product delivery: integrate LLM, RAG, and semantic-search features into customer-facing platforms in 1–3 months, not 12.',
  'API platforms & developer experience: Apigee Developer Portals with CI/CD-driven proxy provisioning, identity, and JIRA workflows.',
  'Headless & composable web: Drupal backends powering React, Next.js, Vue, and Flutter front-ends with JSON:API and design systems.',
  'Compliance-ready delivery: Cyber Essentials, Entra ID, Ping ID, Cloudflare/Akamai — production-grade in regulated environments.',
]

// Skills — the level numbers drive the bar widths in the Skills component.
// Keep the list focused; recruiters skim, they don't read.
export const skills = [
  { name: 'Solution Architecture', level: 97 },
  { name: 'Drupal Architecture (6–11)', level: 97 },
  { name: 'API Platforms & Google Apigee', level: 94 },
  { name: 'AI / LLM / RAG Integration', level: 88 },
  { name: 'Headless CMS — React, Next.js, Vue', level: 93 },
  { name: 'PHP, Symfony, Laravel', level: 95 },
  { name: 'Cloud — Azure, AWS, GCP', level: 90 },
  { name: 'Identity & Security (Entra ID, Ping ID, Cyber Essentials)', level: 92 },
  { name: 'Search — Solr, Elasticsearch, Vector Stores', level: 90 },
  { name: 'DevOps — Docker, Kubernetes, CI/CD, Acquia, Pantheon', level: 88 },
]

export const employmentSummary = [
  {
    org: 'DrupalAmico Limited — Independent Consultant',
    role: 'Solution Architect',
    period: 'Jan 2018 – Present',
    summary: 'Independent Solution Architect engaging directly and via partners. Recent contracts: Royal Mail, Imperial War Museum, Tribal Worldwide / Omnicom, Stratusmeridian, Huumun, AutoZone (Apigee), WaterAid. Architecture, delivery, and stakeholder leadership across pharma, public sector, retail, and global agencies.',
  },
  {
    org: 'Born Group (Tech Mahindra)',
    role: 'Drupal Lead / Architect',
    period: 'Apr 2021 – Nov 2021',
    summary: 'Led the EMEA CMS team and acted as digital solution lead. Defined solutions for complex Drupal implementations across multi-market client engagements.',
  },
  {
    org: 'The Access Group',
    role: 'Senior Developer / Architect',
    period: 'Aug 2018 – Mar 2021',
    summary: 'Architect and contributor across product squads. Stripe API upgrades, third-party integrations, lead initiator of Drupal contribution culture; introduced React and Flutter to the stack.',
  },
  {
    org: 'SID Global Solutions',
    role: 'Senior Developer Portal Developer / Digital Architect',
    period: 'Oct 2018 – Jul 2019',
    summary: 'Lead developer-portal implementations on Drupal + Apigee. Trained team on developer-experience best practices.',
  },
  {
    org: 'Valuebound Inc',
    role: 'Senior Drupal Consultant / Architect',
    period: 'Jul 2015 – Dec 2018',
    summary: 'Drupal Architect, Lead Developer, Trainer, core/module contributor, conference speaker, blogger. Top-30 global Drupal contributor recognition during this period.',
  },
  {
    org: 'Earlier — CTI Digital, Red Crackle, SourceN, 3iCube, Renfos',
    role: 'Developer → Lead → Architect',
    period: 'Nov 2008 – Jun 2015',
    summary: 'Progression from Software Programmer through Lead Developer and Solution Architect roles in the UK and India.',
  },
]

// Each project gets a `client` field so the Portfolio card can render it
// alongside the role, duration, and stack.
export const projectPortfolio = [
  {
    id: 1,
    client: 'Royal Mail',
    title: 'Customer Platform Modernisation — Drupal 9→10 + React 11→19',
    category: 'Solution Architecture',
    role: 'Lead Developer / Drupal Architect',
    stack: 'Drupal 10, React 19, Azure, Camel API, Entra ID CIAM',
    duration: '5 months',
    url: 'https://www.royalmail.com/track-your-item',
    description: 'Architected and led the upgrade of a customer-facing platform serving 31M+ UK addresses. Modernised React tracking and service-locator applications from v11 to v19, completed the Drupal 9→10 upgrade, and integrated Camel APIs and Entra ID CIAM for secure customer identity.',
  },
  {
    id: 2,
    client: 'AutoZone',
    title: 'Apigee Developer Portal with CI/CD Automation',
    category: 'API Platforms & DX',
    role: 'Lead Developer',
    stack: 'Google Apigee, Drupal 11, GCP, Kubernetes, Ping ID, JIRA API',
    duration: '5 months',
    url: 'https://apigeedevportal.autozone.com/',
    description: 'Built a self-service Apigee Developer Portal automating API proxy creation, Ping ID auth provisioning, and JIRA ticket workflows via CI/CD. Turned a manual onboarding process into an automated developer experience for AutoZone\'s API consumers.',
  },
  {
    id: 3,
    client: 'Imperial War Museum',
    title: 'Cyber Essentials Compliance + AI-Ready Search Foundation',
    category: 'Solution Architecture',
    role: 'Backend Developer / Architect',
    stack: 'Drupal 8→10, Solr 8, Elasticsearch 8, React, Azure',
    duration: '20 months',
    url: 'https://www.iwm.org.uk/',
    description: 'Led Cyber Essentials compliance and the Drupal 8→10 upgrade across public and internal platforms. Delivered a React-based internal knowledge-search application and migrated to Solr 8 / Elasticsearch 8 — laying the groundwork for semantic and AI-augmented search.',
  },
  {
    id: 4,
    client: 'Tribal Worldwide / Omnicom',
    title: 'Multi-Brand Drupal 10 Platform Consolidation',
    category: 'Solution Architecture',
    role: 'Solution Architect',
    stack: 'Drupal 10, Tailwind CSS, Storybook, Pattern Lab, Gulp',
    duration: '9 months',
    description: 'Architected a flexible Drupal 10 platform consolidating 30+ brand sites. Built a reusable component library from Figma designs using Tailwind, Storybook, and Pattern Lab. Supported BAU and enhancements across 45 brand properties spanning Drupal 6–10.',
  },
  {
    id: 5,
    client: 'Stratusmeridian',
    title: 'Custom Apigee Developer Portal',
    category: 'API Platforms & DX',
    role: 'Solution Architect',
    stack: 'Google Apigee, Drupal, CI/CD',
    duration: '4 months',
    description: 'Built a custom Apigee Developer Portal supporting API discovery and onboarding aligned with developer workflows and CI/CD pipelines. Delivered a consistent and secure user experience for internal and partner developers.',
  },
  {
    id: 6,
    client: 'WHO — Global Database on Nutrition Action (GINA)',
    title: 'Data-Driven Public Health Platform',
    category: 'Solution Architecture',
    role: 'Lead Architect',
    stack: 'Drupal 7 → 9, XMART DB, Power BI, MySQL',
    duration: 'Multi-year (D7→D9 migration)',
    url: 'https://extranet.who.int/nutrition/gina/en/',
    description: 'Lead Architect on the WHO\'s interactive platform for sharing global nutrition policy and action data. Integrated Drupal with XMART DB and Power BI; led the Drupal 7→9 migration with a 15-strong team. Full architectural ownership across the programme.',
  },
  {
    id: 7,
    client: 'WaterAid',
    title: '17-Site Multilingual ACSF Estate + Headless React Micro-Sites',
    category: 'Headless & Composable Web',
    role: 'Senior Developer',
    stack: 'Drupal 10, Acquia Site Factory, React, Stripe SCA, Storybook',
    duration: 'Ongoing',
    url: 'https://www.wateraid.org/uk/',
    description: 'Custom Stripe SCA + webform payment integration, JSON-LD structured data for FAQ pages, multilingual/multisite delivery on ACSF, headless React micro-sites, and Storybook-driven theme upgrades across 17 international websites.',
  },
  {
    id: 8,
    client: 'Royal Mail Parcelforce',
    title: 'Drupal 7 → 10 Migration on Azure',
    category: 'Solution Architecture',
    role: 'Senior Developer',
    stack: 'Drupal 7→10, Azure, Bing Search, Entra ID, MySQL',
    duration: '6 months',
    url: 'https://www.parcelforce.com/',
    description: 'Led migration from Drupal 7 to Drupal 10 on Azure. Developed custom migration source and process plugins; migrated Panels to Layout Builder, field collections to Paragraphs, and images to Media entity. Integrated Entra ID for content editors and Azure Bing Search.',
  },
  {
    id: 9,
    client: 'Time Magazine',
    title: 'Unified Drupal 8 Content Platform',
    category: 'Headless & Composable Web',
    role: 'Lead Developer',
    stack: 'Drupal 8, Docker, Custom Modules',
    duration: 'Multi-month build',
    description: 'Lead Developer on a unified Drupal 8 platform for authors, editors, publishers, and traders to create, edit, publish, and syndicate content. Built the Drupal 8 install profile, Docker containers, and custom modules; trained the distributed team.',
  },
  {
    id: 10,
    client: 'Hero Group (Schwartau, Organix)',
    title: 'Multilingual Multi-Site Brand Platform',
    category: 'Headless & Composable Web',
    role: 'Senior Developer',
    stack: 'Drupal 9/10, AWS, Apache Solr, Elasticsearch, PriceSpider',
    duration: '6+ months across multiple brands',
    url: 'https://www.schwartau.de/',
    description: 'Delivered multilingual multi-site platforms for Hero Group brands (Schwartau, Organix). End-to-end build from Figma designs through to production deployment on AWS. Taxonomy-based search, PriceSpider SKU integration, and a flexible Information Architecture Framework adopted across the group.',
  },
  {
    id: 11,
    client: 'Ferguson',
    title: 'Apigee Developer Portal — Enterprise API Onboarding',
    category: 'API Platforms & DX',
    role: 'Lead Developer',
    stack: 'Drupal 7, Apigee Developer Portal, ADP SSO, Swagger UI',
    duration: '9 months',
    url: 'https://dev.developer.ferguson.com/',
    description: 'Built a centralised Apigee Developer Portal giving internal and partner developers a single secure entry point to Ferguson\'s enterprise APIs. SSO via ADP, customised Swagger UI, and a CI/CD configurator module to streamline API onboarding.',
  },
  {
    id: 12,
    client: 'Drupal Community',
    title: 'Top-30 Global Drupal Contributor — 15+ Open-Source Modules',
    category: 'Open Source',
    role: 'Module Author / Maintainer',
    stack: 'Drupal 6–11, PHP, Symfony',
    duration: '2015–Present',
    url: 'https://www.drupal.org/u/rakeshgectcr',
    description: 'Recognised by Dries Buytaert in the official "Who Sponsors Drupal Development" reports as a Top-30 global contributor (2015–2017). Author / maintainer of 15+ contributed modules including Loqate, Custom Solr Search, Page Access, Entity Reference Tab/Accordion Formatter, Views Taxonomy Term Name Depth, and Apigee App Dashboard.',
  },
]

// Categories derived automatically — no need to edit
export const categories = ['All', ...new Set(projectPortfolio.map(p => p.category))]
