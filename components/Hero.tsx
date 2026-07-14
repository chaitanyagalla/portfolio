"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code2, FileText, Mail } from "lucide-react";
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
          <span className="text-amber">AI agents</span> that run inside them.
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

        <motion.div variants={rise} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href="#contact" className="btn-primary w-full sm:w-auto">
            <Mail className="h-4 w-4" />
            Get In Touch
          </a>
          <a
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-full sm:w-auto"
          >
            <FileText className="h-4 w-4" />
            Resume / CV
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-full sm:w-auto"
          >
            <Code2 className="h-4 w-4" />
            GitHub
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
          A real run of my Job Scout Agent, replayed - not a mockup. Source
          below.
        </p>
      </motion.div>
    </section>
  );
}
