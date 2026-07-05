"use client";

import { Wrench } from "lucide-react";
import Reveal from "./Reveal";
import Section from "./Section";
import Tooltip from "./Tooltip";
import { skillGroups } from "@/lib/data";

const toolTheme: Record<string, { short: string; color: string }> = {
  "Google ADK": { short: "AD", color: "#4285F4" },
  Gemini: { short: "Ge", color: "#8E75FF" },
  LangChain: { short: "LC", color: "#2FB67C" },
  LiteLLM: { short: "LL", color: "#F59E0B" },
  RAG: { short: "RG", color: "#E8A33D" },
  "Tool Use": { short: "TU", color: "#E8A33D" },
  React: { short: "Re", color: "#61DAFB" },
  "Next.js": { short: "N", color: "#E9E6E0" },
  TypeScript: { short: "TS", color: "#3178C6" },
  "Tailwind CSS": { short: "TW", color: "#38BDF8" },
  "ShadCN UI": { short: "UI", color: "#E9E6E0" },
  "Node.js": { short: "Nd", color: "#68A063" },
  Express: { short: "Ex", color: "#A49F96" },
  FastAPI: { short: "FA", color: "#009688" },
  Prisma: { short: "Pr", color: "#5A67D8" },
  "Socket.io": { short: "So", color: "#E9E6E0" },
  PostgreSQL: { short: "PG", color: "#336791" },
  MongoDB: { short: "Mg", color: "#47A248" },
  Redis: { short: "Rd", color: "#DC382D" },
  "AWS EC2": { short: "AWS", color: "#FF9900" },
  Docker: { short: "Do", color: "#2496ED" },
  "GitHub Actions": { short: "GH", color: "#7C3AED" },
};

function ToolPill({ name, tip }: { name: string; tip: string }) {
  const theme = toolTheme[name] ?? { short: name.slice(0, 2), color: "#E8A33D" };

  return (
    <Tooltip tip={tip}>
      <span className="group inline-flex h-11 max-w-full items-center gap-2 rounded-md border border-line bg-ink px-3 text-sm text-mist transition-colors hover:border-amber hover:bg-well hover:text-fog">
        <span
          className="grid h-6 min-w-6 place-items-center rounded-sm px-1 font-mono text-[10px] font-semibold text-white"
          style={{ backgroundColor: theme.color }}
          aria-hidden
        >
          {theme.short}
        </span>
        <span className="truncate whitespace-nowrap">{name}</span>
      </span>
    </Tooltip>
  );
}

export default function Tools() {
  return (
    <Section
      id="tools"
      label="Tools"
      title="A practical stack for apps, APIs, and agent workflows."
      description="Compact tools I use across frontend, backend, data, cloud, and AI systems."
      icon={<Wrench className="h-5 w-5" />}
    >
      <div className="space-y-8">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.04}>
            <div className="grid gap-4 md:grid-cols-[150px_1fr] md:items-start">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-dim">
                {group.label}
              </h4>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
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
