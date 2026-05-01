import type { Metadata } from "next";
import { GeistSans, GeistMono } from 'geist/font'
import Script from 'next/script'
import "./globals.css";
import ThemeRegistry from "@/src/theme/ThemeRegistry";

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  metadataBase: new URL("https://mahbubislammahim.github.io"),
  title: {
    default: "Mahbub Islam Mahim - Software Engineer | Samsung Research",
    template: "%s | Mahbub Islam Mahim"
  },
  description: "Software Engineer at Samsung Research specializing in Knowledge Graphs, Machine Learning, and AI. Award-winning researcher with A1-grade patent and publications in top-tier conferences.",
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
    "Fine-tuning"
  ],
  authors: [{ name: "Mahbub Islam Mahim" }],
  creator: "Mahbub Islam Mahim",
  publisher: "Mahbub Islam Mahim",
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
    url: 'https://mahbubislammahim.github.io/',
    siteName: 'Mahbub Islam Mahim',
    title: 'Mahbub Islam Mahim - Software Engineer | Samsung Research',
    description: 'Software Engineer at Samsung Research specializing in Knowledge Graphs, Machine Learning, and AI. Award-winning researcher with A1-grade patent and publications in top-tier conferences.',
    images: [
      {
        url: '/profile.jpeg',
        width: 1200,
        height: 630,
        alt: 'Mahbub Islam Mahim - Software Engineer at Samsung Research',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahbub Islam Mahim - Software Engineer | Samsung Research',
    description: 'Software Engineer at Samsung Research specializing in Knowledge Graphs, Machine Learning, and AI.',
    images: ['/profile.jpeg'],
    creator: '@mahbubislammahim',
  },
  alternates: {
    canonical: 'https://mahbubislammahim.github.io/',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./logo.svg?v=1" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mahbub Islam Mahim",
              "jobTitle": "Software Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Samsung R&D Institute Bangladesh",
                "url": "https://research.samsung.com/srbd"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Jahangirnagar University",
                "url": "https://juniv.edu/"
              },
              "email": "mahbubislammahim@gmail.com",
              "url": "https://mahbubislammahim.github.io/",
              "image": "https://mahbubislammahim.github.io/profile.jpeg",
              "sameAs": [
                "https://github.com/MAHIM-JU-CSE",
                "https://www.linkedin.com/in/mahbub-islam-mahim-4634a5154/",
                "https://www.facebook.com/mahimmahbubislam"
              ],
              "knowsAbout": [
                "Machine Learning",
                "Knowledge Graphs",
                "Artificial Intelligence",
                "Software Engineering",
                "RDFox",
                "Semantic Reasoning"
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "degree",
                  "educationalLevel": "Master's Degree",
                  "name": "MSc in Computer Science & Engineering",
                  "about": "Jahangirnagar University"
                },
                {
                  "@type": "EducationalOccupationalCredential", 
                  "credentialCategory": "degree",
                  "educationalLevel": "Bachelor's Degree",
                  "name": "BSc in Computer Science & Engineering",
                  "about": "Jahangirnagar University"
                }
              ],
              "award": "National Science and Technology Fellowship",
              "description": "Software Engineer at Samsung Research specializing in Knowledge Graphs, Machine Learning, and AI. Award-winning researcher with A1-grade patent and publications in top-tier conferences."
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4SNMB4FHPZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4SNMB4FHPZ');
          `}
        </Script>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
