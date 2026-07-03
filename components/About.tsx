"use client";

import Reveal from "./Reveal";
import Tooltip from "./Tooltip";
import Section from "./Section";
import { skillGroups, experience } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" label="About">
      <Reveal>
        <h3 className="max-w-2xl text-2xl font-semibold tracking-display sm:text-3xl">
          One year in, moving fast toward agent engineering.
        </h3>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-mist">
          I started as a MERN developer, shipped a production CRM and a
          hospital management system, then went deep on agentic AI — Google
          ADK, Gemini, LangChain, RAG. I build in public on X and LinkedIn,
          and I care about the numbers: response times, validation coverage,
          uptime. Hover any skill for the receipt.
        </p>
      </Reveal>

      {/* Skills — plain ruled columns, no chip cloud */}
      <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.04}>
            <h4 className="border-b border-line pb-3 font-mono text-xs uppercase tracking-[0.2em] text-dim">
              {group.label}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {group.skills.map((skill) => (
                <li key={skill.name} className="text-[14px] leading-snug">
                  <Tooltip tip={skill.tip}>
                    <span className="receipt text-mist transition-colors hover:text-fog">
                      {skill.name}
                    </span>
                  </Tooltip>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      {/* Experience — ruled rows */}
      <div className="mt-20">
        <h4 className="border-b border-line pb-3 font-mono text-xs uppercase tracking-[0.2em] text-dim">
          Experience
        </h4>
        {experience.map((job) => (
          <Reveal key={job.period}>
            <div className="border-b border-line py-7 last:border-b-0">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h5 className="text-lg font-semibold tracking-tight">
                  {job.role}
                </h5>
                <span className="font-mono text-sm text-mist">{job.org}</span>
                <span className="tnum ml-auto font-mono text-xs text-dim">
                  {job.period}
                </span>
              </div>
              <p className="mt-2 max-w-2xl text-[14.5px] leading-relaxed text-mist">
                {job.summary}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
