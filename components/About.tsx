import { BriefcaseBusiness, CheckCircle2, MapPin, UserRound } from "lucide-react";
import Reveal from "./Reveal";
import Section from "./Section";

const strengths = [
  "Own features across frontend, API, data, and deployment layers.",
  "Learn Java and Spring Boot by building one complete, inspectable product.",
  "Use AI models as planners while keeping validation and scoring inspectable.",
  "Measure the complete user path before choosing a performance fix.",
];

const roleFit = [
  { label: "Target roles", value: "Full-stack · Java / Spring Boot · Backend" },
  { label: "Location", value: "Hyderabad, India" },
  { label: "Work preference", value: "Remote or hybrid" },
  { label: "Availability", value: "Available now" },
];

export default function About() {
  return (
    <Section
      id="about"
      label="About"
      labelTip="The context behind the stack and project metrics."
      title="An engineer who follows the whole path to production."
      description="I am most useful on products where the interface, backend, data model, and operational details need to work as one system."
      icon={<UserRound className="h-5 w-5" />}
    >
      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <article className="h-full rounded-md border border-line bg-well/35 p-5 sm:p-7">
            <div className="flex items-center gap-3">
              <BriefcaseBusiness className="h-5 w-5 text-amber" />
              <h4 className="text-xl font-semibold tracking-tight text-fog">
                What I bring
              </h4>
            </div>
            <p className="mt-5 text-base leading-8 text-mist">
              I have 1+ year of professional experience building production
              web applications, including a CRM used across more than 500
              records and an internship platform with protected patient,
              doctor, and administrator workflows.
            </p>
            <p className="mt-4 text-base leading-8 text-mist">
              I am expanding that foundation into Java and Spring Boot through
              TaskFlow, where I am learning security, multi-tenancy,
              transactional service design, JPA, and Flyway by building a real
              full-stack MVP in public.
            </p>
            <ul className="mt-6 space-y-4">
              {strengths.map((strength) => (
                <li key={strength} className="flex gap-3 text-sm leading-7 text-mist">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-ok" />
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={0.05}>
          <aside className="h-full rounded-md border border-line bg-well/35 p-5 sm:p-7">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-amber" />
              <h4 className="text-xl font-semibold tracking-tight text-fog">
                Role fit
              </h4>
            </div>
            <dl className="mt-5 divide-y divide-line">
              {roleFit.map((item) => (
                <div key={item.label} className="py-4 first:pt-0 last:pb-0">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-6 text-fog">{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}
