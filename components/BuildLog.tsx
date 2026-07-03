"use client";

import Reveal from "./Reveal";
import Section from "./Section";
import { buildLog, links } from "@/lib/data";

export default function BuildLog() {
  return (
    <Section id="log" label="Build log">
      <Reveal>
        <h3 className="max-w-2xl text-2xl font-semibold tracking-display sm:text-3xl">
          I post what I ship — wins, dead ends, and the numbers behind both.
        </h3>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-mist">
          Full stream on{" "}
          <a
            href={links.x}
            target="_blank"
            rel="noopener noreferrer"
            className="u-link text-amber"
          >
            X
          </a>{" "}
          and{" "}
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="u-link text-amber"
          >
            LinkedIn
          </a>
          .
        </p>
      </Reveal>

      <div className="mt-12">
        {buildLog.map((entry, i) => (
          <Reveal key={entry.title} delay={i * 0.03}>
            <article className="grid gap-x-8 gap-y-1 border-b border-line py-7 last:border-b-0 sm:grid-cols-[100px_1fr]">
              <time className="tnum font-mono text-xs leading-6 text-dim">
                {entry.date}
              </time>
              <div className="min-w-0">
                <h4 className="font-medium text-fog">{entry.title}</h4>
                <p className="mt-1.5 max-w-2xl text-[14px] leading-relaxed text-mist">
                  {entry.body}
                </p>
                <p className="mt-2 font-mono text-[11px] text-dim">
                  → {entry.tag}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
