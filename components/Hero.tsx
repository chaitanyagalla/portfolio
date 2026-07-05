"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Code2, FileText, Mail } from "lucide-react";
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
    <section id="top" className="mx-auto max-w-5xl px-4 pb-16 pt-40 sm:px-6 sm:pb-20 sm:pt-40">
      <motion.div
        variants={shouldReduce ? undefined : stagger}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={rise}
          className="flex flex-col gap-5 sm:flex-row sm:items-center"
        >
          <div className="relative h-24 w-24 overflow-hidden rounded-full border border-line bg-well sm:h-32 sm:w-32">
            <Image
              src={profileImage}
              alt="Chaitanya Galla"
              fill
              priority
              sizes="(min-width: 640px) 128px, 112px"
              className="object-cover"
              style={{ objectPosition: "24% 70%" }}
            />
          </div>

          <div>
            <h1 className="text-3xl font-semibold leading-tight tracking-display text-fog sm:text-[2rem]">
              Hi, Chaitanya here
            </h1>
            <p className="mt-2 text-lg font-medium leading-snug text-mist sm:text-xl">
              Full-Stack Developer <span className="text-dim">/</span>{" "}
              Hyderabad, IN
            </p>
          </div>
        </motion.div>

        <motion.p
          variants={rise}
          className="mt-9 max-w-3xl text-xl font-medium leading-9 text-mist sm:text-2xl sm:leading-10"
        >
          I am a full-stack developer based in Hyderabad, I build full-stack apps powered by AI agents that run inside them.
        </motion.p>

        <motion.p
          variants={rise}
          className="mt-6 max-w-3xl text-base leading-8 text-mist sm:text-lg"
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
        className="mt-16 h-px origin-left bg-line sm:mt-20"
        aria-hidden
      />

      <motion.div
        initial={shouldReduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="mt-12 sm:mt-16"
      >
        <TerminalDemo />
        <p className="mt-4 font-mono text-xs text-dim">
          A replay-style view of the Job Scout Agent workflow.
        </p>
      </motion.div>
    </section>
  );
}
