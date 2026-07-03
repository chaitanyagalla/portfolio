
export const links = {
  email: "chaitanyagalla1813@gmail.com",
  github: "https://github.com/chaitanyagalla", 
  linkedin: "https://www.linkedin.com/in/chaitanya-galla-47a764330/",
  x: "https://x.com/Chaitanyagalla",
  resume: "https://drive.google.com/file/d/13SUJeL6viuUY0YlDWnkYCuqWp-N2FKSm/view?usp=sharing", 
};

export type Project = {
  slug: string;
  name: string;
  meta: string; 
  tagline: string;
  description: string;
  metrics: { value: string; label: string }[];
  stack: { name: string; tip: string }[];
  live: string;
  code: string;
};

export const projects: Project[] = [
  {
    slug: "job-scout-agent",
    name: "Job Scout Agent",
    meta: "2026 · AI agent",
    tagline: "An AI agent that reads your resume, then hunts jobs for you.",
    description:
      "Single-agent system built on Google ADK + Gemini 2.0 Flash orchestrating 8 tools — resume parsing, Apify scrapers, Adzuna API, and a deterministic 0–100 match scorer with explainable verdicts. Deployed via FastAPI with ADK auto-generated endpoints.",
    metrics: [
      { value: "8", label: "tools orchestrated" },
      { value: "3-layer", label: "resume parse pipeline" },
      { value: "5", label: "countries searched" },
    ],
    stack: [
      { name: "Google ADK", tip: "Agent framework — sessions, tools, state" },
      { name: "Gemini 2.0", tip: "Reasoning + Vision fallback for scanned PDFs" },
      { name: "FastAPI", tip: "Serves ADK auto-generated endpoints" },
      { name: "LiteLLM", tip: "Groq / NVIDIA NIM routing with fallback" },
      { name: "Pydantic", tip: "Validated agent I/O — zero-garbage extraction" },
      { name: "Apify", tip: "Scraping actors for job boards" },
    ],
    live: "https://example.com/job-scout-live",
    code: "https://example.com/job-scout-code",
  },
  {
    slug: "skillhigh-crm",
    name: "SkillHigh CRM",
    meta: "2025 · production system",
    tagline: "Production CRM where search got 70% faster.",
    description:
      "Full-stack CRM for lead management, sales tracking and workflow automation across 500+ user records. Redis caching + PostgreSQL indexing cut query load by 60%; role-based dashboards for 3 user roles, shipped on AWS EC2 with zero-downtime CI/CD.",
    metrics: [
      { value: "800→240ms", label: "search response time" },
      { value: "60%", label: "query load reduction" },
      { value: "15+", label: "searchable fields" },
    ],
    stack: [
      { name: "React", tip: "TypeScript + ShadCN UI component system" },
      { name: "Express", tip: "REST API with layered middleware" },
      { name: "Prisma", tip: "Typed ORM over PostgreSQL (Neon)" },
      { name: "PostgreSQL", tip: "Compound indexes for hot query paths" },
      { name: "Redis", tip: "Caching + rate limiting" },
      { name: "AWS EC2", tip: "Zero-downtime deploys via GitHub Actions" },
    ],
    live: "https://example.com/skillhigh-live",
    code: "https://example.com/skillhigh-code",
  },
  {
    slug: "videosave",
    name: "VideoSave",
    meta: "2025 · web app",
    tagline: "Multi-platform video downloader with live progress streaming.",
    description:
      "Real-time downloader for YouTube, Instagram and X. Socket.io streams download progress live to the client; drag-and-drop URL intake, persistent history, and a hardened API layer with Helmet, CORS, rate limiting and Zod hitting 99%+ validation coverage.",
    metrics: [
      { value: "3", label: "platforms supported" },
      { value: "99%+", label: "request validation" },
      { value: "live", label: "progress via WebSockets" },
    ],
    stack: [
      { name: "Next.js 14", tip: "App Router + server actions" },
      { name: "TypeScript", tip: "End-to-end types, client to API" },
      { name: "Socket.io", tip: "Live download progress streaming" },
      { name: "Prisma", tip: "Persistent download history" },
      { name: "Zod", tip: "Schema validation on every request" },
    ],
    live: "https://example.com/videosave-live",
    code: "https://example.com/videosave-code",
  },
];

export type SkillGroup = {
  label: string;
  skills: { name: string; tip: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "AI / Agents",
    skills: [
      { name: "Google ADK", tip: "Built and deployed a production agent with it" },
      { name: "LangChain", tip: "Embeddings + retrieval pipelines" },
      { name: "LiteLLM", tip: "Multi-provider routing: Groq, NVIDIA NIM, Gemini" },
      { name: "RAG", tip: "Retrieval-augmented generation patterns" },
      { name: "Tool Use", tip: "Multi-tool orchestration with validated I/O" },
      { name: "Prompt Eng.", tip: "Structured outputs, few-shot, eval loops" },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React", tip: "Hooks, context, performance patterns" },
      { name: "Next.js 14", tip: "App Router, RSC, server actions" },
      { name: "TypeScript", tip: "Strict mode, end-to-end typing" },
      { name: "Tailwind", tip: "Design systems without the CSS sprawl" },
      { name: "ShadCN UI", tip: "Accessible primitives, customized" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", tip: "Express APIs serving 10K+ daily requests" },
      { name: "FastAPI", tip: "Python APIs for AI services" },
      { name: "Prisma", tip: "Typed ORM, migrations, Neon Postgres" },
      { name: "Socket.io", tip: "Real-time bidirectional streaming" },
      { name: "REST Design", tip: "Versioning, pagination, RBAC" },
    ],
  },
  {
    label: "Data",
    skills: [
      { name: "PostgreSQL", tip: "Indexing + query optimization (800→240ms)" },
      { name: "MongoDB", tip: "Mongoose ODM, aggregation pipelines" },
      { name: "Redis", tip: "Caching + rate limiting, 60% load cut" },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { name: "AWS EC2", tip: "Production deploys with zero downtime" },
      { name: "GCP Cloud Run", tip: "Containerized agent deployment" },
      { name: "Docker", tip: "Multi-stage builds, slim images" },
      { name: "GitHub Actions", tip: "CI/CD pipelines, automated releases" },
    ],
  },
];

export type LogEntry = {
  date: string;
  title: string;
  body: string;
  tag: string;
};

export const buildLog: LogEntry[] = [
  {
    date: "2026-06",
    title: "Shipped deterministic job-match scoring",
    body: "Replaced LLM-only ranking with a 4-signal weighted engine over a 100+ skill ontology. Same resume, same jobs, same score — every run. Explainable verdicts with hard-blocker flags.",
    tag: "job-scout-agent",
  },
  {
    date: "2026-05",
    title: "3-layer resume parsing with vision fallback",
    body: "Local PDF extraction → LiteLLM via Groq → Gemini Vision for scanned resumes. Pydantic models reject garbage before it hits the agent. Parse success across every format I've thrown at it.",
    tag: "job-scout-agent",
  },
  {
    date: "2026-03",
    title: "50+ YouTube Shorts, zero manual steps",
    body: "End-to-end pipeline: Groq scripts → Edge TTS → MoviePy scenes → auto-upload via YouTube Data API. SQLite-backed retries keep uptime at 95%+.",
    tag: "shorts-automation",
  },
  {
    date: "2026-01",
    title: "Cut CRM search from 800ms to 240ms",
    body: "Compound indexes on hot query paths + Redis cache in front of PostgreSQL. 60% less query load with 500+ user records in production.",
    tag: "skillhigh-crm",
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    org: "SkillHigh",
    period: "Jul 2025 — Mar 2026",
    summary:
      "Architected a production CRM end-to-end: React + TypeScript frontend, Express + Prisma + PostgreSQL backend, Redis caching, AWS EC2 with zero-downtime CI/CD.",
  },
  {
    role: "Full Stack Developer Intern",
    org: "SkillHigh",
    period: "Mar 2025 — Jun 2025",
    summary:
      "Built a MERN hospital management system with JWT auth, granular RBAC across 3 roles, and Redis-cached APIs handling 10K+ daily calls.",
  },
];
