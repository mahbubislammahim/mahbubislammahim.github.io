import type { Metadata } from "next";

export const siteConfig = {
  name: "Mahbub Islam Mahim",
  /** ISO date (YYYY-MM-DD). Bump when you publish meaningful site updates. */
  lastUpdated: "2026-03-24",
  title: "Mahbub Islam Mahim - Software Engineer | Samsung Research",
  description: "Software Engineer at Samsung Research specializing in Knowledge Graphs, Machine Learning, and AI. Award-winning researcher with A1-grade patent and publications in top-tier conferences.",
  url: "https://mahbubislammahim.github.io/mahim/",
  ogImage: "https://mahbubislammahim.github.io/mahim/profile.jpeg",
  links: {
    github: "https://github.com/MAHIM-JU-CSE",
    linkedin: "https://www.linkedin.com/in/mahbub-islam-mahim-4634a5154/",
    email: "mahbubislammahim@gmail.com",
  },
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
