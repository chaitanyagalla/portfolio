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

const proof = [
  { value: "1+ year", label: "Production experience" },
  { value: "70%", label: "Faster CRM search" },
  { value: "500+", label: "CRM records supported" },
];

export default function RecruiterHero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-36">
      <div className="max-w-5xl">
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-well/50 px-3 py-1.5 font-mono text-xs text-mist">
          <span className="h-2 w-2 rounded-full bg-ok" aria-hidden />
          Full-Stack Developer · Available now
        </p>

        <h1 className="mt-7 max-w-4xl text-[2.65rem] font-semibold leading-[1.03] tracking-display text-fog sm:text-6xl lg:text-[4.5rem]">
          I build full-stack products and reliable{" "}
          <span className="text-amber">AI agent systems.</span>
        </h1>

        <p className="mt-8 max-w-3xl text-xl font-medium leading-9 text-mist sm:text-2xl sm:leading-10">
          I have 1+ year of production experience across React, Node.js,
          Python, and PostgreSQL. At SkillHigh, I helped cut CRM search time
          from 800ms to 240ms and repeated query load by 60%.
        </p>

        <p className="mt-5 max-w-2xl text-base leading-8 text-mist">
          I work across the full path from interface and API design to data,
          deployment, and AI workflows whose decisions can be inspected.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a href={`mailto:${links.email}`} className="btn-primary w-full sm:w-auto">
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
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" />
            Hyderabad, India · Open to remote &amp; hybrid
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

      <dl className="tnum mt-14 grid overflow-hidden rounded-md border border-line bg-well/35 sm:grid-cols-3">
        {proof.map((item) => (
          <div
            key={item.label}
            className="border-b border-line px-5 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
          >
            <dd className="text-2xl font-semibold tracking-tight text-fog">
              {item.value}
            </dd>
            <dt className="mt-1 font-mono text-xs text-mist">{item.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
