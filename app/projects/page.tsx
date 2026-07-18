import Link from "next/link";
import { ProjectsContent } from "@/components/Projects";

export const metadata = {
  title: "Projects",
  description:
    "Selected full-stack, backend, and AI agent projects by Chaitanya Galla.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <Link href="/" className="u-link font-mono text-sm text-mist">
        Back Home
      </Link>
      <header className="mt-12 border-b border-line pb-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-dim">
          Projects
        </p>
        <h1 className="mt-6 max-w-3xl text-3xl font-semibold leading-tight tracking-display sm:text-5xl">
          Full-stack builds, backend systems, and AI workflows.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-mist sm:text-lg">
          A deeper view of the products and systems I have built, with the
          stack, constraints, and practical outcomes kept visible.
        </p>
      </header>
      <div className="py-14">
        <ProjectsContent />
      </div>
    </main>
  );
}
