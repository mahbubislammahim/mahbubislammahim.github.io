import type { Metadata } from "next";

export const siteConfig = {
  name: "Mahbub Islam Mahim",
  /** ISO date (YYYY-MM-DD). Bump when you publish meaningful site updates. */
  lastUpdated: "2026-03-24",
  title: "Mahbub Islam Mahim - Software Engineer | Samsung Research",
  description: "Software Engineer at Samsung Research specializing in Knowledge Graphs, Machine Learning, and AI. Award-winning researcher with A1-grade patent and publications in top-tier conferences.",
  url: "https://mahbubislammahim.github.io/",
  ogImage: "https://mahbubislammahim.github.io/profile.jpeg",
  links: {
    github: "https://github.com/MAHIM-JU-CSE",
    linkedin: "https://www.linkedin.com/in/mahbub-islam-mahim-4634a5154/",
    email: "mahbubislammahim@gmail.com",
  },
  /** Served from the same deploy as `public/` → `dist/` (must be committed). */
  resumePdfFileName: "Mahbub_Islam_Mahim_Resume.pdf",
  /**
   * Optional full URL to resume (e.g. Google Drive “anyone with link” view or
   * `https://drive.google.com/uc?export=download&id=FILE_ID`). Leave empty to use the PDF on this site.
   */
  resumeExternalUrl: "",
  keywords: [
    "Mahbub Islam Mahim",
    "Software Engineer",
    "Samsung Research",
    "Knowledge Graph",
    "Machine Learning",
    "AI",
    "RDFox",
    "Oxford Semantic Technologies",
    "Jahangirnagar University",
    "Computer Science",
    "Research",
    "Patent",
    "Bangla NLP",
    "LLM",
    "Fine-tuning",
    "Generative AI",
    "Semantic Reasoning",
    "Trustworthy AI"
  ]
};

export function getResumeHref(): string {
  const external = siteConfig.resumeExternalUrl?.trim();
  if (external) return external;
  const base = siteConfig.url.endsWith("/")
    ? siteConfig.url
    : `${siteConfig.url}/`;
  return new URL(siteConfig.resumePdfFileName, base).href;
}

export function formatSiteLastUpdated(isoDate: string): string {
  const parts = isoDate.split("-").map(Number);
  if (parts.length !== 3 || parts.some(Number.isNaN)) return isoDate;
  const [y, m, d] = parts;
  const date = new Date(y, m - 1, d);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Software Engineer at Samsung Research`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@mahbubislammahim',
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
    apple: '/logo.svg',
  },
  manifest: '/manifest.json',
};
