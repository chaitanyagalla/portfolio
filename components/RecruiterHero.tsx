import {
  ArrowDownRight,
  BriefcaseBusiness,
  Code2,
  FileText,
  Mail,
  MapPin,
} from "lucide-react";
import Tooltip from "./Tooltip";
import { links } from "@/lib/data";

export default function RecruiterHero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-36"
    >
      <div className="max-w-5xl">
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-well/50 px-3 py-1.5 font-mono text-xs text-mist">
          <span className="h-2 w-2 rounded-full bg-ok" aria-hidden />
          <span className="sm:hidden">
            Full-Stack + Java Developer · Available now
          </span>
          <span className="hidden sm:inline">
            Full-Stack &amp; Java Spring Boot Developer · Available now
          </span>
        </p>

        <h1 className="mt-7 max-w-4xl text-[2.65rem] font-semibold leading-[1.03] tracking-display text-fog sm:text-6xl lg:text-[4.5rem]">
          I build full-stack products and reliable{" "}
          <span className="text-amber">AI agent systems.</span>
        </h1>

        <p className="mt-7 max-w-3xl text-lg font-medium leading-8 text-mist sm:text-xl sm:leading-9">
          Full-stack developer with 1+ year of production experience across
          React, Node.js, Python, and PostgreSQL. At SkillHigh, I optimized a
          CRM supporting 500+ records; now I build with Java 21, Spring Boot,
          and inspectable AI workflows.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={`mailto:${links.email}`}
            className="btn-primary w-full sm:w-auto"
          >
            <Mail className="h-4 w-4" />
            Email Me
          </a>
          <a href="#projects" className="btn-secondary w-full sm:w-auto">
            <ArrowDownRight className="h-4 w-4" />
            View Projects
          </a>
          <Tooltip
            tip="One-page resume with experience, projects, and technical skills."
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
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-xs text-mist">
          <a
            href={`mailto:${links.email}`}
            className="u-link inline-flex items-center gap-1.5 transition-colors hover:text-fog"
          >
            <Mail className="h-3.5 w-3.5" />
            {links.email}
          </a>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            Hyderabad, India
          </span>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="u-link inline-flex items-center gap-1.5 transition-colors hover:text-fog"
          >
            <BriefcaseBusiness className="h-3.5 w-3.5" />
            LinkedIn
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="u-link inline-flex items-center gap-1.5 transition-colors hover:text-fog"
          >
            <Code2 className="h-3.5 w-3.5" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
