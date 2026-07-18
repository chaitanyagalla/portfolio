const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
const vercelProductionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = new URL(
  configuredUrl ??
    (vercelProductionHost
      ? `https://${vercelProductionHost}`
      : "http://localhost:3000"),
);

export const siteDescription =
  "Full-stack developer with 1+ year of production experience building React, Node.js, Python, PostgreSQL, and inspectable AI agent systems.";
