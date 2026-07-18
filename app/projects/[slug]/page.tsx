import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Code2,
  Mail,
  Play,
} from "lucide-react";
import TerminalDemo from "@/components/TerminalDemo";
import { links, projects } from "@/lib/data";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.name} Case Study`,
    description: `${project.tagline} Read the problem, architecture, engineering decisions, evidence, and implementation details.`,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.name} Case Study — Chaitanya Galla`,
      description: project.tagline,
      type: "article",
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <Link
        href="/#projects"
        className="u-link inline-flex items-center gap-2 font-mono text-sm text-mist"
      >
        <ArrowLeft className="h-4 w-4" />
        Back To Selected Work
      </Link>

      <header className="mt-12 border-b border-line pb-12 sm:mt-16 sm:pb-16">
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-mist">
          <span className="rounded-full border border-line bg-well/45 px-3 py-1.5">
            {project.meta}
          </span>
          <span className="rounded-full border border-line px-3 py-1.5">
            {project.status}
          </span>
        </div>

        <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-tight tracking-display text-fog sm:text-6xl">
          {project.name}
        </h1>
        <p className="mt-5 max-w-3xl text-xl leading-9 text-mist sm:text-2xl sm:leading-10">
          {project.tagline}
        </p>
        <p className="mt-6 max-w-3xl font-mono text-sm leading-7 text-mist">
          <span className="text-fog">My role:</span> {project.role}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {project.demoVideo ? (
            <a
              href={project.demoVideo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              <Play className="h-4 w-4" />
              Watch Demo
            </a>
          ) : null}
          {project.code ? (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto"
            >
              <Code2 className="h-4 w-4" />
              View Source
            </a>
          ) : null}
        </div>
      </header>

      <dl className="tnum grid border-b border-line sm:grid-cols-3">
        {project.metrics.map((metric) => (
          <div
            key={metric.label}
            className="border-b border-line py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
          >
            <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-dim">
              {metric.kind} · {metric.label}
            </dt>
            <dd className="mt-2 text-2xl font-semibold tracking-tight text-fog sm:text-3xl">
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>

      <section className="grid gap-6 border-b border-line py-14 lg:grid-cols-2 lg:py-20">
        <article className="rounded-md border border-line bg-well/35 p-5 sm:p-7">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-dim">
            The problem
          </p>
          <p className="mt-5 text-base leading-8 text-mist sm:text-lg">
            {project.problem}
          </p>
        </article>
        <article className="rounded-md border border-line bg-well/35 p-5 sm:p-7">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-dim">
            What I built
          </p>
          <p className="mt-5 text-base leading-8 text-mist sm:text-lg">
            {project.solution}
          </p>
        </article>
      </section>

      <section className="border-b border-line py-14 lg:py-20">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-dim">
          System flow
        </p>
        <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-display text-fog">
          The architecture, from input to useful output.
        </h2>

        <ol className="mt-9 grid gap-4 lg:grid-cols-5">
          {project.architecture.map((step, index) => (
            <li key={step.label} className="relative">
              <div className="h-full rounded-md border border-line bg-well/35 p-4">
                <span className="font-mono text-[11px] text-amber">
                  0{index + 1}
                </span>
                <h3 className="mt-3 text-base font-semibold text-fog">{step.label}</h3>
                <p className="mt-2 text-sm leading-6 text-mist">{step.description}</p>
              </div>
              {index < project.architecture.length - 1 ? (
                <ArrowRight
                  className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 rounded-full bg-ink p-0.5 text-amber lg:block"
                  aria-hidden
                />
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      <section className="grid gap-10 border-b border-line py-14 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-dim">
            Delivered
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-display text-fog">
            What the build demonstrates.
          </h2>
          <ul className="mt-7 space-y-4">
            {project.impact.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-7 text-mist">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-ok" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-dim">
            Decision log
          </p>
          <div className="mt-5 space-y-4">
            {project.decisions.map((decision) => (
              <article
                key={decision.title}
                className="rounded-md border border-line bg-well/35 p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold text-fog">{decision.title}</h3>
                <p className="mt-2 text-sm leading-7 text-mist">
                  {decision.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {project.slug === "job-scout-agent" ? (
        <section className="border-b border-line py-14 lg:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-dim">
            Execution evidence
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-display text-fog">
            A replay of the agent&apos;s tool path.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-mist">
            The replay mirrors a working run: parse, validate, search, filter,
            score, and explain. The public source and full demo are linked above.
          </p>
          <div className="mt-8">
            <TerminalDemo />
          </div>
        </section>
      ) : null}

      <aside className="mt-12 rounded-md border border-line bg-well/35 p-5 sm:p-7">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-dim">
          Evidence note
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-mist">
          {project.evidenceNote}
        </p>
      </aside>

      <section className="mt-16 flex flex-col justify-between gap-6 border-t border-line pt-10 sm:flex-row sm:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-dim">
            Relevant role on your team?
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-fog">Let&apos;s talk.</h2>
        </div>
        <a href={`mailto:${links.email}`} className="btn-primary w-full sm:w-auto">
          <Mail className="h-4 w-4" />
          Email Chaitanya
        </a>
      </section>
    </main>
  );
}
