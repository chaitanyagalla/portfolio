"use client";

import { useState } from "react";
import { BriefcaseBusiness, Mail, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import Tooltip from "./Tooltip";
import { links } from "@/lib/data";

const COPYRIGHT_YEAR = 2026;

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // The mailto link remains available when clipboard access is blocked.
    }
  };

  return (
    <section id="contact" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-dim">
            <Tooltip
              tip="The shortest path from interesting work to let's build something."
              align="start"
            >
              <span className="cursor-help">Contact</span>
            </Tooltip>
          </p>
          <h2 className="mt-7 max-w-3xl text-3xl font-semibold leading-tight tracking-display sm:text-4xl">
            Hiring for a full-stack, backend, or AI agent role?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-mist sm:text-lg">
            I am available now and interested in teams that value product
            ownership, measurable performance, and AI systems people can inspect.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm text-mist">
            <a href={`mailto:${links.email}`} className="u-link inline-flex items-center gap-2 text-fog">
              <Mail className="h-4 w-4 text-amber" />
              {links.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-amber" />
              Hyderabad · Remote or hybrid
            </span>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a href={`mailto:${links.email}`} className="btn-primary w-full sm:w-auto">
              <Mail className="h-4 w-4" />
              Email Chaitanya
            </a>
            <button onClick={copyEmail} className="btn-secondary w-full sm:w-auto">
              {copied ? "Copied" : "Copy Email"}
            </button>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto"
            >
              <BriefcaseBusiness className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </Reveal>

        <footer className="mt-20 flex flex-col gap-5 border-t border-line pt-8 text-[13px] text-dim sm:mt-24 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono">Chaitanya Galla / {COPYRIGHT_YEAR}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="u-link text-mist transition-colors hover:text-fog"
            >
              GitHub
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="u-link text-mist transition-colors hover:text-fog"
            >
              LinkedIn
            </a>
            <a
              href={links.x}
              target="_blank"
              rel="noopener noreferrer"
              className="u-link text-mist transition-colors hover:text-fog"
            >
              X
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
