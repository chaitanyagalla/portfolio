export const links = {
  email: "chaitanyagalla1813@gmail.com",
  github: "https://github.com/chaitanyagalla",
  linkedin: "https://www.linkedin.com/in/chaitanya-galla-47a764330/",
  x: "https://x.com/Chaitanyagalla",
  resume:
    "https://drive.google.com/file/d/13SUJeL6viuUY0YlDWnkYCuqWp-N2FKSm/view?usp=sharing",
};

export type Project = {
  slug: string;
  name: string;
  meta: string;
  tagline: string;
  description: string;
  metrics: { value: string; label: string }[];
  stack: { name: string; tip: string }[];
  demoVideo?: string;
  code?: string;
};

export const projects: Project[] = [
  {
    slug: "job-scout-agent",
    name: "Job Scout Agent",
    meta: "2026 - AI Agent",
    tagline: "An agent that turns a resume into a focused job search workflow.",
    description:
      "Built with Google ADK, Gemini, FastAPI, Apify, Adzuna, and structured resume parsing. The system reads a candidate profile, searches relevant boards, filters weak matches, and returns explainable recommendations without pretending the work is magic.",
    metrics: [
      { value: "8", label: "Integrated tools" },
      { value: "3", label: "Resume parsing layers" },
      { value: "5", label: "Search regions" },
    ],
    stack: [
      { name: "Google ADK", tip: "Agent framework for sessions, tools, and state" },
      { name: "Gemini", tip: "Reasoning plus vision fallback for scanned PDFs" },
      { name: "FastAPI", tip: "API surface for the agent workflow" },
      { name: "LiteLLM", tip: "Provider routing with fallback support" },
      { name: "Pydantic", tip: "Validated input and output models" },
      { name: "Apify", tip: "Job board collection through scraping actors" },
    ],
    demoVideo: "https://www.youtube.com/watch?v=LSoEIB8Hcn8",
    code: "https://github.com/chaitanyagalla/job_scout_agent.git",
  },
  {
    slug: "skillhigh-crm",
    name: "SkillHigh CRM",
    meta: "2025 - Production System",
    tagline: "A CRM built for faster lead search and cleaner team workflows.",
    description:
      "Designed and shipped a full-stack CRM for lead management, sales tracking, and role-based dashboards. The product used Redis caching, PostgreSQL indexing, and an AWS deployment flow that made day-to-day sales work faster and easier to operate.",
    metrics: [
      { value: "800ms to 240ms", label: "Search response time" },
      { value: "60%", label: "Lower query load" },
      { value: "3", label: "User roles" },
    ],
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
    code: "https://github.com/skillhighedu/CRM_backend",
  },
  {
    slug: "videosave",
    name: "VideoSave",
    meta: "2025 - Web App",
    tagline: "A full-stack downloader with background processing and secure delivery.",
    description:
      "Built a Next.js 16 downloader for YouTube, Instagram, and X with validated URL intake, drag-and-drop UX, and authenticated or guest download history. Background jobs use yt-dlp, FFmpeg merging, Prisma-backed progress tracking, 2.5-second status polling, Vercel Blob delivery in production, local media fallback for development, OAuth sessions, anonymous cookies, rate limiting, ownership checks, and Zod validation.",
    metrics: [
      { value: "3", label: "Supported platforms" },
      { value: "2.5s", label: "Status polling" },
      { value: "Secure", label: "Ownership checks" },
    ],
    stack: [
      { name: "Next.js 16", tip: "App Router APIs and downloader UI" },
      { name: "TypeScript", tip: "Types across client and API" },
      { name: "Prisma", tip: "Progress, status, and download history" },
      { name: "PostgreSQL", tip: "Persistent user and download data" },
      { name: "yt-dlp", tip: "Platform media extraction" },
      { name: "FFmpeg", tip: "Media merging and processing" },
      { name: "Vercel Blob", tip: "Production file delivery" },
      { name: "Zod", tip: "URL and payload validation" },
    ],
    demoVideo: "https://youtu.be/-Zzo0zGRLeA",
    code: "https://github.com/chaitanyagalla/videoDownloader.git",
  },
];

export type SkillGroup = {
  label: string;
  skills: { name: string; tip: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "AI And Agents",
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
      { name: "Node.js", tip: "APIs, auth, jobs, and integrations" },
      { name: "Express", tip: "REST services with middleware and validation" },
      { name: "FastAPI", tip: "Python APIs for AI services" },
      { name: "Prisma", tip: "Typed data access and migrations" },
      { name: "Socket.io", tip: "Real-time bidirectional events" },
    ],
  },
  {
    label: "Data And Cloud",
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
    period: "Jul 2025 - Mar 2026",
    summary:
      "Built and maintained a production CRM with React, TypeScript, Express, Prisma, PostgreSQL, Redis, and AWS EC2. Focused on search performance, role-based dashboards, and reliable deployment workflows.",
    bullets: [
      "Built CRM dashboards, lead workflows, and role-based screens with React and TypeScript.",
      "Improved common search paths with PostgreSQL indexes and Redis caching.",
      "Shipped backend APIs with Express, Prisma, authentication, validation, and deployment support.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    org: "SkillHigh",
    period: "Mar 2025 - Jun 2025",
    summary:
      "Developed a MERN hospital management system with JWT authentication, role-based access, Redis-cached APIs, and clean operational flows for staff, doctors, and admins.",
    bullets: [
      "Created patient, doctor, and admin flows for a hospital management product.",
      "Implemented JWT authentication and role-based access across core routes.",
      "Added Redis-backed API caching for frequently requested data.",
    ],
  },
];
