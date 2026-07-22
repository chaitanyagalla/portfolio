export const links = {
  email: "chaitanyagalla1813@gmail.com",
  github: "https://github.com/chaitanyagalla",
  linkedin: "https://www.linkedin.com/in/chaitanya-galla-47a764330/",
  x: "https://x.com/Chaitanyagalla",
  resume: "/chaitanya-galla-resume.pdf",
};

export type Project = {
  slug: string;
  name: string;
  meta: string;
  tagline: string;
  description: string;
  role: string;
  status: string;
  problem: string;
  solution: string;
  metrics: { value: string; label: string; kind: "Result" | "Scope" }[];
  impact: string[];
  impactLabel?: string;
  impactTitle?: string;
  decisionLabel?: string;
  decisions: { title: string; description: string }[];
  architecture: { label: string; description: string }[];
  evidenceNote: string;
  stack: { name: string; tip: string }[];
  demoVideo?: string;
  code?: string;
};

export const projects: Project[] = [
  {
    slug: "taskflow-java",
    name: "TaskFlow",
    meta: "2026 - Java / Spring Boot",
    tagline: "Learning Java and Spring Boot by building a multi-tenant project management platform.",
    description:
      "TaskFlow is my active Java learning build: a production-style Spring Boot 3 backend paired with a responsive React client. The MVP now covers authentication, organization-scoped data, projects, Kanban task movement, filters, subtasks, and comments; deployment, real-time updates, analytics, and hardening remain in progress.",
    role: "Builder and learner - Java/Spring Boot backend, React client, data model, and tests",
    status: "In progress - MVP built, deployment next",
    problem:
      "Tutorial-sized CRUD apps do not expose the backend decisions I want to understand deeply: authentication boundaries, tenant isolation, transactional ordering, authorization, filtering, schema migrations, and a frontend that must recover when a write fails.",
    solution:
      "I am learning those concepts by building one connected system. The Java 21 API uses Spring Boot, Security, Data JPA, Specifications, Flyway, and PostgreSQL; the React client consumes the API through guarded routes, TanStack Query, responsive MUI views, and optimistic Kanban updates with rollback.",
    metrics: [
      { value: "Java 21", label: "Backend toolchain", kind: "Scope" },
      { value: "23", label: "Implemented HTTP routes", kind: "Scope" },
      { value: "5 / 9", label: "Build phases complete", kind: "Scope" },
    ],
    impactLabel: "Built and learning",
    impactTitle: "What the current MVP teaches and demonstrates.",
    decisionLabel: "Learning decisions",
    impact: [
      "Built stateless JWT authentication with BCrypt, organization creation during registration, and tenant claims checked on every authenticated request.",
      "Scoped project and task reads to the current organization, with role and ownership rules protecting write operations.",
      "Implemented transactional Kanban moves that lock, move, and resequence tasks across columns without leaving duplicate positions.",
      "Connected a responsive React interface with guarded routes, debounced filters, task details, subtasks, comments, and optimistic drag-and-drop rollback.",
    ],
    decisions: [
      {
        title: "A modular monolith while I learn the domain",
        description:
          "Feature-focused Spring packages keep auth, projects, boards, tasks, and users understandable without adding microservice deployment complexity too early.",
      },
      {
        title: "Tenant scope comes from the verified token",
        description:
          "The JWT filter verifies the user and organization, stores the tenant for the request, and repositories still query by organization ID so a client cannot choose another tenant.",
      },
      {
        title: "Optimistic movement must be reversible",
        description:
          "The UI moves a card immediately, but saves the previous board and restores it if the Spring API rejects the operation.",
      },
    ],
    architecture: [
      { label: "React", description: "Guarded routes, forms, filters, and responsive Kanban UI" },
      { label: "REST", description: "Validated request DTOs and consistent API envelopes" },
      { label: "Security", description: "JWT, BCrypt, RBAC, and request tenant context" },
      { label: "Spring", description: "Transactional services, JPA repositories, and Specifications" },
      { label: "PostgreSQL", description: "Flyway-managed tenant, project, board, and task schema" },
    ],
    evidenceNote:
      "This is an in-progress learning project, not a production deployment claim. The public source currently contains the complete MVP, backend and frontend tests, and the progress tracker; deployment and later real-time, analytics, and hardening phases are still open.",
    stack: [
      { name: "Java 21", tip: "Language and toolchain for the backend" },
      { name: "Spring Boot", tip: "REST API, dependency wiring, configuration, and testing" },
      { name: "Spring Security", tip: "Stateless JWT authentication and role checks" },
      { name: "Spring Data JPA", tip: "Tenant-scoped persistence and dynamic task filters" },
      { name: "PostgreSQL", tip: "Relational storage managed through Flyway migrations" },
      { name: "React", tip: "Responsive client with TanStack Query and MUI" },
    ],
    code: "https://github.com/chaitanyagalla/taskFlowJava",
  },
  {
    slug: "job-scout-agent",
    name: "Job Scout Agent",
    meta: "2026 — AI Agent",
    tagline: "An agent that turns a resume into a focused job search workflow.",
    description:
      "Built with Google ADK, Gemini, FastAPI, Apify, Adzuna, and structured resume parsing. The system reads a candidate profile, searches relevant boards, filters weak matches, and returns explainable recommendations without pretending the work is magic.",
    role: "Sole developer · Agent architecture, API, scoring, and integrations",
    status: "Public working build",
    problem:
      "Resumes arrive in inconsistent formats, job listings are scattered across sources, and a single unexplained AI score is difficult to trust. The workflow needed resilient parsing, structured search, and recommendations a candidate could inspect.",
    solution:
      "I designed a local-first parsing chain with model and vision fallbacks, validated every profile with Pydantic, orchestrated job-source tools through Google ADK, and kept the final match score deterministic and explainable.",
    metrics: [
      { value: "8", label: "Integrated tools", kind: "Scope" },
      { value: "3", label: "Resume parsing layers", kind: "Scope" },
      { value: "4", label: "Explainable scoring signals", kind: "Scope" },
    ],
    impact: [
      "Parses standard PDFs locally before spending an LLM or vision call.",
      "Validates extracted profiles before any search or scoring step begins.",
      "Surfaces skill coverage, title alignment, experience gaps, keyword overlap, and hard blockers separately.",
      "Searches across five countries through Adzuna and Apify-backed sources.",
    ],
    decisions: [
      {
        title: "Local extraction first",
        description:
          "Clean PDFs stay fast and private; LiteLLM and Gemini Vision are fallbacks for documents that need more interpretation.",
      },
      {
        title: "The model does not invent the score",
        description:
          "Four explicit signals feed a deterministic 0–100 calculation, so a recommendation can be checked and debugged.",
      },
      {
        title: "Tool failures remain visible",
        description:
          "Fallback sources, validated responses, and session state keep a failed scraper or incomplete field from becoming a confident answer.",
      },
    ],
    architecture: [
      { label: "Resume", description: "PDF intake and local text extraction" },
      { label: "Profile", description: "Fallback parsing plus Pydantic validation" },
      { label: "Search", description: "Google ADK coordinates Adzuna and Apify" },
      { label: "Match", description: "Four deterministic scoring signals" },
      { label: "Explain", description: "Ranked roles, gaps, and blocker flags" },
    ],
    evidenceNote:
      "These numbers describe tested engineering scope, not claimed hiring outcomes. The demo and public source show the current workflow.",
    stack: [
      { name: "Google ADK", tip: "Agent framework for sessions, tools, and state" },
      { name: "Gemini", tip: "Reasoning plus vision fallback for scanned PDFs" },
      { name: "FastAPI", tip: "API surface for the agent workflow" },
      { name: "LiteLLM", tip: "Provider routing with fallback support" },
      { name: "Pydantic", tip: "Validated input and output models" },
      { name: "Apify", tip: "Job board collection through scraping actors" },
    ],
    demoVideo: "https://www.youtube.com/watch?v=LSoEIB8Hcn8",
    code: "https://github.com/chaitanyagalla/job_scout_agent",
  },
  {
    slug: "skillhigh-crm",
    name: "SkillHigh CRM",
    meta: "2025 — Production System",
    tagline: "A CRM built for faster lead search and cleaner team workflows.",
    description:
      "Designed and shipped a full-stack CRM for lead management, sales tracking, and role-based dashboards. The product used Redis caching, PostgreSQL indexing, and an AWS deployment flow that made day-to-day sales work faster and easier to operate.",
    role: "Full-stack developer · Product UI, APIs, search performance, and deployment",
    status: "Production company project",
    problem:
      "Sales users needed to find and filter leads without repeated requests or slow database scans interrupting the workflow. The system also needed distinct dashboards and permissions for three user roles.",
    solution:
      "I treated search as one browser-to-database path: debounced input reduced unnecessary requests, PostgreSQL indexes supported the real filter patterns, Redis cached repeated reads, and the application shipped through an AWS EC2 deployment workflow.",
    metrics: [
      { value: "800ms → 240ms", label: "Search response time", kind: "Result" },
      { value: "60%", label: "Lower repeated query load", kind: "Result" },
      { value: "500+", label: "CRM records supported", kind: "Scope" },
    ],
    impact: [
      "Improved common search response time by 70 percent.",
      "Reduced repeated database query load with debouncing and Redis caching.",
      "Supported filtering across more than 15 lead fields.",
      "Delivered role-based dashboards for admin, manager, and employee workflows.",
    ],
    decisions: [
      {
        title: "Reduce demand at the source",
        description:
          "Debounced field search prevented the UI from creating server work on every keystroke.",
      },
      {
        title: "Index observed access patterns",
        description:
          "PostgreSQL indexes followed the filters and sorts people actually used instead of adding indexes speculatively.",
      },
      {
        title: "Cache with clear ownership",
        description:
          "Redis handled repeated reads while the API kept cache keys and invalidation close to the underlying query.",
      },
    ],
    architecture: [
      { label: "React", description: "Debounced search and role-based dashboards" },
      { label: "Express", description: "Authenticated REST API and validation" },
      { label: "Redis", description: "Repeated-read cache and rate limiting" },
      { label: "PostgreSQL", description: "Prisma models and indexed search paths" },
      { label: "AWS", description: "EC2 deployment with GitHub Actions" },
    ],
    evidenceNote:
      "Performance figures come from the production work summarized in my resume. The company source is not publicly accessible, so the linked demo is the public product evidence.",
    stack: [
      { name: "React", tip: "TypeScript UI with reusable components" },
      { name: "Express", tip: "REST API with layered middleware" },
      { name: "Prisma", tip: "Typed ORM over PostgreSQL" },
      { name: "PostgreSQL", tip: "Indexes for frequent CRM queries" },
      { name: "Redis", tip: "Caching and rate limiting" },
      { name: "AWS EC2", tip: "Production deployment target" },
    ],
    demoVideo:
      "https://drive.google.com/file/d/11c2w-95y1ndB2sWpQJ1vazl2JonX7k9h/view?usp=drive_link",
  },
  {
    slug: "hospital-operations-platform",
    name: "Hospital Operations Platform",
    meta: "2025 — Full-Stack System",
    tagline: "Role-based workflows for patients, doctors, and administrators.",
    description:
      "Built a MERN platform around patient registration, doctor onboarding, appointment scheduling, and admin operations. JWT sessions with HTTP-only cookies and role-based access protect each route, while Redis caching keeps frequently requested data responsive.",
    role: "Full-stack developer intern · Frontend flows, backend services, auth, and caching",
    status: "Completed internship project",
    problem:
      "Patients, doctors, and administrators needed separate operational flows without duplicating the application or exposing routes to the wrong role.",
    solution:
      "I built modular React interfaces and Express services around shared domain models, then enforced JWT sessions, HTTP-only cookies, and role-based access at the API boundary. Redis cached frequently requested records.",
    metrics: [
      { value: "4", label: "Core workflows", kind: "Scope" },
      { value: "3", label: "Protected user roles", kind: "Scope" },
      { value: "20+", label: "Reusable React components", kind: "Scope" },
    ],
    impact: [
      "Covered patient registration, doctor onboarding, appointment scheduling, and admin operations.",
      "Separated admin, doctor, and patient permissions across protected routes.",
      "Kept authentication tokens in HTTP-only cookies instead of browser-accessible storage.",
      "Used reusable components and modular services to keep each role flow maintainable.",
    ],
    decisions: [
      {
        title: "Authorization at the route boundary",
        description:
          "Role middleware checks access before protected handlers run, rather than relying on what the interface happens to hide.",
      },
      {
        title: "HTTP-only session cookies",
        description:
          "The browser can send the JWT without exposing it directly to client-side JavaScript.",
      },
      {
        title: "Shared building blocks, distinct workflows",
        description:
          "Reusable React components support three role experiences without turning them into three separate applications.",
      },
    ],
    architecture: [
      { label: "React", description: "Patient, doctor, and admin interfaces" },
      { label: "Express", description: "Workflow APIs and authorization middleware" },
      { label: "JWT", description: "HTTP-only sessions and role checks" },
      { label: "MongoDB", description: "Users, doctors, and appointment records" },
      { label: "Redis", description: "Frequently requested data cache" },
    ],
    evidenceNote:
      "The figures describe delivered engineering scope. The public repository contains the implementation; no production usage claim is made for this internship build.",
    stack: [
      { name: "React", tip: "Reusable interfaces for each user role" },
      { name: "Node.js", tip: "Backend services and workflow logic" },
      { name: "Express", tip: "REST endpoints and access middleware" },
      { name: "MongoDB", tip: "Patient, doctor, and appointment records" },
      { name: "Redis", tip: "Caching for frequently requested data" },
      { name: "JWT", tip: "HTTP-only sessions with role-based access" },
    ],
    code: "https://github.com/chaitanyagalla/health-management-system",
  },
];

export type SkillGroup = {
  label: string;
  skills: { name: string; tip: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "AI & Agents",
    skills: [
      { name: "Google ADK", tip: "Built and deployed an agent workflow with it" },
      { name: "Gemini", tip: "Reasoning and vision fallback for document workflows" },
      { name: "LangChain", tip: "Retrieval and orchestration patterns" },
      { name: "LiteLLM", tip: "Multi-provider routing across LLM APIs" },
      { name: "RAG", tip: "Retrieval-augmented generation workflows" },
      { name: "Tool Use", tip: "Validated multi-tool agent execution" },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React", tip: "Hooks, state, forms, and component architecture" },
      { name: "Next.js", tip: "App Router, server components, and routing" },
      { name: "TypeScript", tip: "Typed interfaces across the product" },
      { name: "Tailwind CSS", tip: "Clean, responsive interfaces" },
      { name: "ShadCN UI", tip: "Accessible primitives and product UI patterns" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Java", tip: "Learning Java 21 through the TaskFlow backend" },
      { name: "Spring Boot", tip: "Built TaskFlow APIs with Security, Data JPA, and validation" },
      { name: "Node.js", tip: "APIs, auth, jobs, and integrations" },
      { name: "Express", tip: "REST services with middleware and validation" },
      { name: "FastAPI", tip: "Python APIs for AI services" },
      { name: "Prisma", tip: "Typed data access and migrations" },
      { name: "Socket.io", tip: "Real-time bidirectional events" },
    ],
  },
  {
    label: "Data & Cloud",
    skills: [
      { name: "PostgreSQL", tip: "Indexes, relational schema design, and queries" },
      { name: "MongoDB", tip: "Document models and aggregation pipelines" },
      { name: "Redis", tip: "Caching, rate limits, and hot path performance" },
      { name: "AWS EC2", tip: "Production hosting and deployment" },
      { name: "Docker", tip: "Containerized app builds" },
      { name: "GitHub Actions", tip: "CI/CD pipelines and automated releases" },
    ],
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    org: "SkillHigh",
    period: "Jul 2025 – Mar 2026",
    summary:
      "Built and maintained a production CRM supporting 500+ records with React, TypeScript, Express, Prisma, PostgreSQL, Redis, and AWS EC2. Focused on search performance, role-based dashboards, and reliable deployment workflows.",
    bullets: [
      "Reduced common search response time from 800ms to 240ms and repeated query load by 60%.",
      "Built debounced search and filtering across 15+ lead fields plus dashboards for three user roles.",
      "Shipped Express and Prisma APIs to AWS EC2 with authentication, validation, caching, and CI/CD support.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    org: "SkillHigh",
    period: "Mar 2025 – Jun 2025",
    summary:
      "Developed a MERN hospital management system with JWT authentication, role-based access, Redis-cached APIs, and clean operational flows for staff, doctors, and admins.",
    bullets: [
      "Created patient, doctor, and admin flows for a hospital management product.",
      "Implemented JWT authentication with HTTP-only cookies and role-based access across protected routes.",
      "Delivered modular backend services, Redis-backed caching, and 20+ reusable React components.",
    ],
  },
];
