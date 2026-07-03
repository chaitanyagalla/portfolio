"use client";

import { Fragment } from "react";
import Reveal from "./Reveal";
import Tooltip from "./Tooltip";
import Section from "./Section";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="work" label={`Work — ${projects.length} projects`}>
      <div>
        {projects.map((project, i) => (
          <Reveal key={project.slug}>
            <article
              className={`border-b border-line pb-14 ${
                i === 0 ? "" : "pt-14"
              } last:border-b-0 last:pb-0`}
            >
              {/* Entry header: name + spec-sheet meta */}
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-2xl font-semibold tracking-display sm:text-3xl">
                  {project.name}
                </h3>
                <span className="font-mono text-xs text-dim">
                  {project.meta}
                </span>
              </div>
              <p className="mt-2 text-[15px] text-mist">{project.tagline}</p>

              <p className="mt-5 max-w-2xl text-[14.5px] leading-relaxed text-mist">
                {project.description}
              </p>

              {/* Metrics — a ruled data row, tabular figures */}
              <dl className="tnum mt-8 grid gap-y-4 border-t border-line pt-5 sm:grid-cols-3 sm:gap-6">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="flex items-baseline justify-between gap-4 sm:block">
                    <dt className="order-last mt-1 font-mono text-[11px] leading-snug text-dim">
                      {metric.label}
                    </dt>
                    <dd className="text-xl font-semibold tracking-tight text-fog sm:text-2xl">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Stack — plain mono line, receipts on hover */}
              <p className="mt-7 font-mono text-[13px] leading-loose text-dim">
                {project.stack.map((tech, j) => (
                  <Fragment key={tech.name}>
                    <Tooltip tip={tech.tip}>
                      <span className="receipt text-mist">{tech.name}</span>
                    </Tooltip>
                    {j < project.stack.length - 1 && (
                      <span aria-hidden> · </span>
                    )}
                  </Fragment>
                ))}
              </p>

              <div className="mt-6 flex gap-6 font-mono text-sm">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-link text-amber"
                >
                  live demo ↗
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-link text-mist transition-colors hover:text-fog"
                >
                  source ↗
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
