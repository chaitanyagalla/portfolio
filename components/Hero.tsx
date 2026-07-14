"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Code2 } from "lucide-react";
import { useEffect, useState } from "react";
import TerminalDemo from "./TerminalDemo";
import Tooltip from "./Tooltip";
import profileImage from "@/assets/chaitu.jpeg";
import { links } from "@/lib/data";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const rise = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function Hero() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const shouldReduce = mounted && Boolean(reduce);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-32 sm:pt-40">
      <motion.div
        variants={shouldReduce ? undefined : stagger}
        initial="hidden"
        animate="show"
        className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center lg:gap-16"
      >
        <div>
          <motion.p
            variants={rise}
            className="font-mono text-[13px] text-mist"
          >
            full-stack developer · building AI agents · open to remote &amp;
            hybrid
          </motion.p>

          <motion.h1
            variants={rise}
            className="mt-7 max-w-4xl text-[2.6rem] font-semibold leading-[1.04] tracking-display text-fog sm:text-6xl lg:text-[4.4rem]"
          >
            I build full-stack apps powered by{" "}
            <span className="text-amber">AI agents</span> that run inside them.
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-8 max-w-xl text-[15px] leading-relaxed text-mist"
          >
            Production systems with{" "}
            <Tooltip tip="React, Next.js 14, TypeScript, Tailwind">
              <span className="receipt text-fog">React &amp; Next.js</span>
            </Tooltip>
            ,{" "}
            <Tooltip tip="Node, Express, FastAPI, Prisma, PostgreSQL, Redis">
              <span className="receipt text-fog">Node &amp; Python</span>
            </Tooltip>{" "}
            and{" "}
            <Tooltip tip="Google ADK, Gemini, LangChain, LiteLLM, RAG">
              <span className="receipt text-fog">agentic AI</span>
            </Tooltip>
            . Search made 70% faster. Agents that actually ship.
          </motion.p>

          <motion.div variants={rise} className="mt-9 flex items-center gap-7 font-mono text-sm">
            <a href="#projects" className="u-link text-amber">
              see the work ↓
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="u-link inline-flex items-center gap-2 text-mist transition-colors hover:text-fog"
            >
              <Code2 className="h-4 w-4" />
              github ↗
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={rise}
          className="relative mx-auto aspect-[4/5] w-full max-w-[270px] overflow-hidden rounded-md border border-line bg-well shadow-2xl shadow-black/25 lg:mx-0 lg:justify-self-end"
        >
          <div className="relative h-full w-full">
            <Image
              src={profileImage}
              alt="Chaitanya Galla"
              fill
              priority
              sizes="(min-width: 1024px) 270px, 80vw"
              className="object-cover"
              style={{ objectPosition: "48% 55%" }}
            />
          </div>
          <div className="pointer-events-none absolute inset-3 rounded-sm border border-line/80" aria-hidden />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" aria-hidden />
        </motion.div>
      </motion.div>

      <motion.div
        initial={shouldReduce ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="mt-16 h-px origin-left bg-line"
        aria-hidden
      />

      <motion.div
        initial={shouldReduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="mt-16"
      >
        <TerminalDemo />
        <p className="mt-4 font-mono text-xs text-dim">
          A real run of my Job Scout Agent, replayed - not a mockup. Source
          below.
        </p>
      </motion.div>
    </section>
  );
}
