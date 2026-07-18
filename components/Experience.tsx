"use client";

import { useState } from "react";
import { Briefcase } from "lucide-react";
import Reveal from "./Reveal";
import Section from "./Section";
import { experience } from "@/lib/data";

export default function Experience() {
  const [open, setOpen] = useState(0);

  return (
    <Section
      id="experience"
      label="Experience"
      labelTip="Where tutorials ended, production began, and ownership got very real."
      title="From internship code to production ownership."
      description="A concise view of where I worked, what I owned, and the practical engineering work behind each role."
      icon={<Briefcase className="h-5 w-5" />}
    >
      <div className="space-y-4">
        {experience.map((job, index) => {
          const isOpen = open === index;

          return (
            <Reveal key={job.period}>
              <article className="rounded-md border border-line bg-well/35 transition-colors hover:border-amber/60">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-start justify-between gap-4 px-4 py-5 text-left sm:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="min-w-0">
                    <span className="block text-lg font-semibold tracking-tight text-fog">
                      {job.role}
                    </span>
                    <span className="mt-1 flex flex-col gap-1 font-mono text-xs text-mist sm:flex-row sm:items-center sm:gap-3">
                      <span>{job.org}</span>
                      <span className="hidden text-dim sm:inline">/</span>
                      <span className="tnum text-dim">{job.period}</span>
                    </span>
                  </span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-line font-mono text-lg leading-none text-amber">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>

                {isOpen ? (
                  <div className="border-t border-line px-4 pb-6 pt-5 sm:px-6">
                    <p className="max-w-2xl text-[14.5px] leading-relaxed text-mist">
                      {job.summary}
                    </p>
                    <ul className="mt-5 max-w-2xl space-y-3">
                      {job.bullets.map((item) => (
                        <li
                          key={item}
                          className="grid grid-cols-[auto_1fr] gap-3 text-[14px] leading-relaxed text-mist"
                        >
                          <span className="mt-2 h-1.5 w-1.5 bg-amber" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
