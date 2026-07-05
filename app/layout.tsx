import type { Metadata } from "next";
import "@fontsource-variable/archivo";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chaitanya Galla - Full-Stack Developer And AI Agent Builder",
  description:
    "Full-stack developer building React, Next.js, Node, Python, and AI agent systems with practical product engineering.",
  icons: {
    icon: "/favicon.jpeg",
    shortcut: "/favicon.jpeg",
    apple: "/favicon.jpeg",
  },
  openGraph: {
    title: "Chaitanya Galla - Full-Stack Developer And AI Agent Builder",
    description:
      "Full-stack developer building practical apps, APIs, and AI agent workflows.",
    type: "website",
    images: ["/favicon.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-ink font-sans text-fog">{children}</body>
    </html>
  );
}
