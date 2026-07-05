"use client";

import { useState } from "react";
import Reveal from "./Reveal";
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
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-dim">
            Contact
          </p>
          <h2 className="mt-7 max-w-3xl text-3xl font-semibold leading-tight tracking-display sm:text-4xl">
            Build the product. Make it reliable. Ship it clean.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-mist sm:text-lg">
            I am looking for full-stack, backend, and AI agent work where the
            product needs ownership, speed, and careful engineering.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a href={`mailto:${links.email}`} className="btn-primary w-full sm:w-auto">
              Start A Conversation
            </a>
            <button onClick={copyEmail} className="btn-secondary w-full sm:w-auto">
              {copied ? "Copied" : "Copy Email"}
            </button>
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
