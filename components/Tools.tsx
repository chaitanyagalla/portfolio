"use client";

import {
  Bot,
  BrainCircuit,
  Cloud,
  Network,
  Route,
  type LucideIcon,
  Wrench,
} from "lucide-react";
import type { SimpleIcon } from "simple-icons";
import {
  siDocker,
  siExpress,
  siFastapi,
  siGithubactions,
  siGoogle,
  siGooglegemini,
  siLangchain,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siReact,
  siRedis,
  siShadcnui,
  siSocketdotio,
  siTailwindcss,
  siTypescript,
} from "simple-icons/icons";
import Reveal from "./Reveal";
import Section from "./Section";
import Tooltip from "./Tooltip";
import { skillGroups } from "@/lib/data";

const featuredSkills = new Set([
  "Google ADK",
  "Gemini",
  "LiteLLM",
  "RAG",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "AWS EC2",
]);

type ToolVisual =
  | { kind: "brand"; icon: SimpleIcon; color?: string }
  | { kind: "concept"; icon: LucideIcon; color: string };

const toolVisuals: Record<string, ToolVisual> = {
  "Google ADK": { kind: "brand", icon: siGoogle },
  Gemini: { kind: "brand", icon: siGooglegemini, color: "#8E75FF" },
  LangChain: { kind: "brand", icon: siLangchain },
  LiteLLM: { kind: "concept", icon: Route, color: "#E8A33D" },
  RAG: { kind: "concept", icon: Network, color: "#8CC97F" },
  "Tool Use": { kind: "concept", icon: Bot, color: "#E8A33D" },
  React: { kind: "brand", icon: siReact },
  "Next.js": { kind: "brand", icon: siNextdotjs, color: "#E9E6E0" },
  TypeScript: { kind: "brand", icon: siTypescript },
  "Tailwind CSS": { kind: "brand", icon: siTailwindcss },
  "ShadCN UI": { kind: "brand", icon: siShadcnui, color: "#E9E6E0" },
  "Node.js": { kind: "brand", icon: siNodedotjs },
  Express: { kind: "brand", icon: siExpress, color: "#E9E6E0" },
  FastAPI: { kind: "brand", icon: siFastapi },
  Prisma: { kind: "brand", icon: siPrisma },
  "Socket.io": { kind: "brand", icon: siSocketdotio, color: "#E9E6E0" },
  PostgreSQL: { kind: "brand", icon: siPostgresql },
  MongoDB: { kind: "brand", icon: siMongodb },
  Redis: { kind: "brand", icon: siRedis },
  "AWS EC2": { kind: "concept", icon: Cloud, color: "#FF9900" },
  Docker: { kind: "brand", icon: siDocker },
  "GitHub Actions": { kind: "brand", icon: siGithubactions },
};

function ToolMark({ name }: { name: string }) {
  const visual = toolVisuals[name] ?? {
    kind: "concept",
    icon: BrainCircuit,
    color: "#E8A33D",
  };

  if (visual.kind === "brand") {
    const color = visual.color ?? `#${visual.icon.hex}`;

    return (
      <svg
        className="h-[18px] w-[18px]"
        viewBox="0 0 24 24"
        role="img"
        aria-label={`${name} logo`}
        style={{ color }}
      >
        <path d={visual.icon.path} fill="currentColor" />
      </svg>
    );
  }

  const Icon = visual.icon;

  return (
    <Icon
      className="h-[18px] w-[18px]"
      aria-label={`${name} symbol`}
      style={{ color: visual.color }}
    />
  );
}

function ToolPill({ name, tip }: { name: string; tip: string }) {
  return (
    <Tooltip tip={tip}>
      <span className="group grid h-12 w-full grid-cols-[1.75rem_minmax(0,1fr)] items-center gap-2.5 rounded-md border border-line bg-ink px-3 text-sm text-mist transition-colors hover:border-amber hover:bg-well hover:text-fog">
        <span className="grid h-7 w-7 place-items-center">
          <ToolMark name={name} />
        </span>
        <span className="min-w-0 truncate whitespace-nowrap">{name}</span>
      </span>
    </Tooltip>
  );
}

export default function Tools() {
  return (
    <Section
      id="tools"
      label="Tools"
      labelTip="A practical toolbox, chosen by shipped work rather than logo collecting."
      title="A focused stack, tied to the work above."
      description="The tools I use most across product interfaces, backend systems, data, deployment, and inspectable AI workflows. The resume carries the complete list."
      icon={<Wrench className="h-5 w-5" />}
    >
      <div className="space-y-8">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.04}>
            <div className="grid gap-3 md:grid-cols-[144px_minmax(0,1fr)] md:items-start">
              <h4 className="pt-4 font-mono text-xs uppercase tracking-[0.2em] text-dim">
                {group.label}
              </h4>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.skills.filter((skill) => featuredSkills.has(skill.name)).map((skill) => (
                  <ToolPill key={skill.name} name={skill.name} tip={skill.tip} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
