"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type Line = {
  text: string;
  tone: "cmd" | "dim" | "ok" | "warn" | "out";
  pause?: number;
};

const script: Line[] = [
  { text: "$ python -m job_scout --resume chaitanya.pdf", tone: "cmd", pause: 700 },
  { text: "[agent] starting Google ADK session...", tone: "dim", pause: 500 },
  { text: "[tool] parse_resume(chaitanya.pdf)", tone: "out", pause: 600 },
  { text: "  ok profile extracted with validated fields", tone: "ok", pause: 500 },
  { text: "[tool] adzuna.search(role='full-stack + ai', remote=true)", tone: "out", pause: 550 },
  { text: "[tool] apify.scrape(boards=4)", tone: "out", pause: 650 },
  { text: "  ok postings collected across 5 regions", tone: "ok", pause: 550 },
  { text: "[filter] removing senior-only and off-profile roles", tone: "dim", pause: 700 },
  { text: "  note 12 postings removed for hard blockers", tone: "warn", pause: 550 },
  { text: "  ok best match: AI Agent Engineer", tone: "ok", pause: 900 },
  { text: "[agent] next step: prepare application notes", tone: "cmd", pause: 2600 },
];

const toneClass: Record<Line["tone"], string> = {
  cmd: "text-fog",
  dim: "text-dim",
  ok: "text-ok",
  warn: "text-amber",
  out: "text-mist",
};

export default function TerminalDemo() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [lines, setLines] = useState<Line[]>([]);
  const [current, setCurrent] = useState("");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const shouldReduce = mounted && Boolean(reduce);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || shouldReduce) return;
    let cancelled = false;

    const later = (fn: () => void, ms: number) => {
      const t = setTimeout(fn, ms);
      timers.current.push(t);
    };

    const typeLine = (lineIdx: number) => {
      if (cancelled) return;
      if (lineIdx >= script.length) {
        later(() => {
          setLines([]);
          setCurrent("");
          typeLine(0);
        }, 400);
        return;
      }

      const line = script[lineIdx];
      const typeChar = (charIdx: number) => {
        if (cancelled) return;
        if (charIdx > line.text.length) {
          setLines((prev) => [...prev, line]);
          setCurrent("");
          later(() => typeLine(lineIdx + 1), line.pause ?? 400);
          return;
        }
        setCurrent(line.text.slice(0, charIdx));
        later(() => typeChar(charIdx + 1), line.tone === "cmd" ? 26 : 10);
      };

      typeChar(0);
    };

    typeLine(0);
    return () => {
      cancelled = true;
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [mounted, shouldReduce]);

  const shown = shouldReduce ? script : lines;
  const currentTone = script[shown.length]?.tone ?? "cmd";

  return (
    <div className="w-full overflow-hidden rounded-md border border-line bg-well">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-4 py-2.5">
        <span className="min-w-0 break-all font-mono text-xs text-dim">
          Chaitanya@dev:~/job-scout — Session Replay
        </span>
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-amber">
          <span className="h-1.5 w-1.5 rounded-full bg-amber" />
          Replay
        </span>
      </div>

      <div className="h-[300px] space-y-1.5 overflow-hidden p-4 font-mono text-[12px] leading-relaxed sm:h-[320px] sm:p-5 sm:text-[13px]">
        {shown.map((line, i) => (
          <p key={i} className={toneClass[line.tone]}>
            {line.text}
          </p>
        ))}
        {!shouldReduce && (
          <p className={toneClass[currentTone]}>
            {current}
            <span className="animate-blink text-amber">|</span>
          </p>
        )}
      </div>
    </div>
  );
}
