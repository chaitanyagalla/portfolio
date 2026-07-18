import type { Metadata } from "next";
import "@fontsource-variable/archivo";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import { siteDescription, siteUrl } from "@/lib/site";
import { links } from "@/lib/data";

import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Chaitanya Galla — Full-Stack Developer & AI Agent Builder",
    template: "%s — Chaitanya Galla",
  },
  description: siteDescription,
  applicationName: "Chaitanya Galla Portfolio",
  authors: [{ name: "Chaitanya Galla", url: siteUrl }],
  creator: "Chaitanya Galla",
  keywords: [
    "Chaitanya Galla",
    "Full-Stack Developer",
    "Backend Developer",
    "AI Agent Engineer",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Hyderabad",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.jpeg",
    shortcut: "/favicon.jpeg",
    apple: "/favicon.jpeg",
  },
  openGraph: {
    title: "Chaitanya Galla — Full-Stack Developer & AI Agent Builder",
    description: siteDescription,
    type: "website",
    locale: "en_IN",
    siteName: "Chaitanya Galla Portfolio",
    url: "/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Chaitanya Galla — Full-Stack Developer and AI Agent Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaitanya Galla — Full-Stack Developer & AI Agent Builder",
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Chaitanya Galla",
    url: siteUrl.toString(),
    jobTitle: "Full-Stack Developer",
    description: siteDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressCountry: "IN",
    },
    sameAs: [links.linkedin, links.github],
    knowsAbout: [
      "Full-stack web development",
      "Backend engineering",
      "AI agents",
      "React",
      "Node.js",
      "Python",
      "PostgreSQL",
    ],
  };

  return (
    <html lang="en">
      <body className="bg-ink font-sans text-fog">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
