"use client";

import Link from "next/link";
import { ArrowRight, Code2, Folder, Play } from "lucide-react";
import { Fragment } from "react";
import Reveal from "./Reveal";
import Tooltip from "./Tooltip";
import Section from "./Section";
import { projects } from "@/lib/data";

type ProjectsProps = {
  limit?: number;
  showSection?: boolean;
};

function ProjectList({ limit }: { limit?: number }) {
  const homepageOrder = ["skillhigh-crm", "job-scout-agent"];
  const ordered =
    typeof limit === "number"
      ? homepageOrder
          .map((slug) => projects.find((project) => project.slug === slug))
          .filter((project): project is (typeof projects)[number] => Boolean(project))
      : projects;
  const shown = typeof limit === "number" ? ordered.slice(0, limit) : ordered;

  return (
    <div>
      {shown.map((project, i) => (
        <Reveal key={project.slug}>
          <article
            className={`border-b border-line pb-14 ${
              i === 0 ? "" : "pt-14"
            } last:border-b-0 last:pb-0`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h4 className="text-xl font-semibold tracking-display sm:text-2xl">
                {project.name}
              </h4>
              <span className="font-mono text-xs text-dim">
                {project.meta}
              </span>
            </div>
            <p className="mt-2 text-base text-mist">{project.tagline}</p>

            <div className="mt-4 flex flex-wrap gap-2 font-mono text-[11px] text-mist">
              <span className="rounded-full border border-line bg-well/45 px-2.5 py-1">
                {project.status}
              </span>
              <span className="rounded-full border border-line px-2.5 py-1">
                {project.role}
              </span>
            </div>

            <p className="mt-5 max-w-2xl text-base leading-8 text-mist">
              {project.description}
            </p>

            <dl className="tnum mt-8 grid gap-y-4 border-t border-line pt-5 sm:grid-cols-3 sm:gap-6">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="flex items-baseline justify-between gap-4 sm:block">
                  <dt className="order-last mt-1 font-mono text-[11px] leading-snug text-dim">
                    {metric.label} · {metric.kind}
                  </dt>
                  <dd className="text-xl font-semibold tracking-tight text-fog sm:text-2xl">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-7 font-mono text-[13px] leading-loose text-dim">
              {project.stack.map((tech, j) => (
                <Fragment key={tech.name}>
                  <Tooltip tip={tech.tip}>
                    <span className="receipt text-mist">{tech.name}</span>
                  </Tooltip>
                  {j < project.stack.length - 1 && <span aria-hidden> / </span>}
                </Fragment>
              ))}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={`/projects/${project.slug}`}
                className="btn-primary w-full sm:w-auto"
              >
                <ArrowRight className="h-4 w-4" />
                Read Case Study
              </Link>
                {project.demoVideo ? (
                  <a
                    href={project.demoVideo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full sm:w-auto"
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
                    Source
                  </a>
                ) : null}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function ProjectsContent({ limit }: { limit?: number }) {
  return <ProjectList limit={limit} />;
}

export default function Projects({ limit = 2, showSection = true }: ProjectsProps) {
  const hasMore = projects.length > limit;

  if (!showSection) {
    return <ProjectList />;
  }

  return (
    <Section
      id="projects"
      label="Projects"
      labelTip="Ideas meet users here, along with edge cases that skipped the invitation."
      title="Selected work, with the decisions and evidence visible."
      description="Each case study separates measured results from engineering scope, then shows the architecture, trade-offs, demo, and source behind the summary."
      icon={<Folder className="h-5 w-5" />}
      action={
        hasMore ? (
          <Link
            href="/projects"
            className="btn-secondary w-full sm:w-auto"
          >
            <Folder className="h-4 w-4" />
            All Projects
          </Link>
        ) : null
      }
    >
      <ProjectList limit={limit} />
    </Section>
  );
}
