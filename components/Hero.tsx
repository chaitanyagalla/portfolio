"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FileText, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import TerminalDemo from "./TerminalDemo";
import Tooltip from "./Tooltip";
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
      >
        <motion.p
          variants={rise}
          className="font-mono text-[13px] text-mist"
        >
          Full-Stack Developer · Building AI Agents
        </motion.p>

        <motion.h1
          variants={rise}
          className="mt-7 max-w-4xl text-[2.6rem] font-semibold leading-[1.04] tracking-display text-fog sm:text-6xl lg:text-[4.4rem]"
        >
          I build full-stack apps powered by{" "}
          <Tooltip tip="Useful digital teammates: quick with tools, quiet in meetings.">
            <span className="cursor-help text-amber underline decoration-amber/40 decoration-dotted underline-offset-[6px]">
              AI agents
            </span>
          </Tooltip>{" "}
          that run inside them.
        </motion.h1>

        <motion.p
          variants={rise}
          className="mt-8 max-w-3xl text-xl font-medium leading-9 text-mist sm:text-2xl sm:leading-10"
        >
          My stack includes{" "}
          <Tooltip tip="React, Next.js, TypeScript, Tailwind">
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
          . I care about the full path from rough idea to something people can
          keep using.
        </motion.p>

        <motion.p variants={rise} className="mt-6 max-w-2xl text-base leading-8 text-mist">
          I was drawn to agents because they turn backend systems into products
          that can decide, act, and show their work.
        </motion.p>

        <motion.div variants={rise} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Tooltip
            tip="Opens the inbox portal. I keep the auto-replies on a short leash."
            className="w-full sm:w-auto"
            interactive
          >
            <a href="#contact" className="btn-primary w-full sm:w-auto">
              <Mail className="h-4 w-4" />
              Get In Touch
            </a>
          </Tooltip>
          <Tooltip
            tip="The formal version of me, with fewer side quests."
            className="w-full sm:w-auto"
            interactive
          >
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto"
            >
              <FileText className="h-4 w-4" />
              Resume / CV
            </a>
          </Tooltip>
        </motion.div>

        <motion.div
          variants={rise}
          className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-xs text-dim"
        >
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" />
            Hyderabad, India
          </span>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="u-link text-mist transition-colors hover:text-fog"
          >
            LinkedIn
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="u-link text-mist transition-colors hover:text-fog"
          >
            GitHub
          </a>
          <a
            href={links.x}
            target="_blank"
            rel="noopener noreferrer"
            className="u-link text-mist transition-colors hover:text-fog"
          >
            X
          </a>
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
          A real run of my Job Scout Agent, replayed — not a mockup. Source
          below.
        </p>
      </motion.div>
    </section>
  );
}
