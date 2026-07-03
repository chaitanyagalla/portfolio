"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { links } from "@/lib/data";

const COPYRIGHT_YEAR = 2026;

/** Live clock in Hyderabad time — small proof there's a person here. */
function LocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="tnum" suppressHydrationWarning>
      {time || "--:--:--"}
    </span>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — the mailto link still works
    }
  };

  return (
    <section id="contact" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-dim">
            Contact
          </p>
          <h2 className="mt-6 max-w-3xl text-3xl font-semibold leading-[1.08] tracking-display sm:text-5xl">
            Hiring for full-stack or agent engineering? Let&apos;s talk.
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-mist">
            Remote or hybrid. I reply fast — usually the same day.
          </p>

          <div className="mt-10 flex flex-wrap items-baseline gap-x-6 gap-y-3">
            <a
              href={`mailto:${links.email}`}
              className="u-link break-all text-xl font-semibold tracking-tight text-amber sm:text-2xl"
            >
              {links.email}
            </a>
            <button
              onClick={copyEmail}
              className="font-mono text-[13px] text-dim transition-colors hover:text-fog"
            >
              {copied ? "copied ✓" : "[ copy ]"}
            </button>
          </div>
        </Reveal>

        <footer className="mt-24 grid gap-6 border-t border-line pt-8 sm:grid-cols-3 sm:items-center">
          <div className="flex gap-6 font-mono text-[13px]">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="u-link text-mist transition-colors hover:text-fog"
            >
              github
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="u-link text-mist transition-colors hover:text-fog"
            >
              linkedin
            </a>
            <a
              href={links.x}
              target="_blank"
              rel="noopener noreferrer"
              className="u-link text-mist transition-colors hover:text-fog"
            >
              x / twitter
            </a>
          </div>
          <p className="font-mono text-xs text-dim sm:text-center">
            Hyderabad, IN — <LocalTime /> IST
          </p>
          <p className="font-mono text-xs text-dim sm:text-right">
            © {COPYRIGHT_YEAR} · Archivo &amp; IBM Plex Mono ·
            Next.js 14
          </p>
        </footer>
      </div>
    </section>
  );
}
