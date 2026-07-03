import type { Metadata } from "next";
import "@fontsource-variable/archivo";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chaitanya Galla — Full-Stack Developer & AI Agent Builder",
  description:
    "Full-stack developer (React, Next.js, Node, Python) building agentic AI systems with Google ADK, Gemini and LangChain. APIs at 10K+ daily requests, search made 70% faster, agents shipped to production.",
  openGraph: {
    title: "Chaitanya Galla — Full-Stack Developer & AI Agent Builder",
    description:
      "Full-stack developer building agentic AI systems. Production APIs, real metrics, agents that ship.",
    type: "website",
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
