# Chaitanya Portfolio

A recruiter-focused personal portfolio for Chaitanya Galla, built with Next.js,
TypeScript, Tailwind CSS, and Framer Motion. The site focuses on measurable
full-stack outcomes, inspectable AI-agent work, project evidence, and clear
hiring paths.

## Highlights

- Outcome-led hero with direct email, project, and resume actions
- Dedicated project case studies with architecture, decisions, metrics, demos,
  evidence notes, and source links
- About, focused skills, experience, technical writing, and recruiter-ready contact sections
- Job Scout Agent terminal replay inside its relevant case study
- Content-driven portfolio data in `lib/data.ts`
- Warm dark "Terminal Dusk" visual system with accessible focus states
- Accessible text contrast and essential content that remains visible before hydration
- Open Graph artwork, Person structured data, robots rules, and a generated sitemap

## Tech Stack

- Next.js 14 with the App Router
- React 18 and TypeScript
- Tailwind CSS
- Framer Motion
- Archivo and IBM Plex Mono via Fontsource

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local Next.js development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run Next.js linting |

## Project Structure

| Path | Purpose |
| --- | --- |
| `app/` | App Router pages, layout, metadata, and global styles |
| `components/` | Portfolio sections and reusable UI components |
| `app/projects/[slug]/` | Static project case-study routes |
| `lib/data.ts` | Portfolio content: links, project evidence, skills, and experience |
| `lib/site.ts` | Canonical production URL and shared metadata description |
| `tailwind.config.ts` | Theme tokens, font families, colors, and animation config |
| `app/globals.css` | Base styles, scrollbar, link effects, focus states, and motion settings |

## Update Content

Most editable content lives in `lib/data.ts`:

- `links`: email, GitHub, LinkedIn, X, and resume URLs
- `projects`: case studies, result/scope metrics, architecture, decisions, demos, and source links
- `skillGroups`: grouped skills with tooltip notes
- `experience`: roles, organizations, periods, and summaries

Replace any `https://example.com/...` placeholder URLs before publishing.

For page title, description, and Open Graph metadata, edit `app/layout.tsx`.

## Design Notes

The current theme uses a warm graphite base with amber highlights:

- Page background: `#131211`
- Terminal well: `#0C0B0A`
- Borders: `#292621`
- Primary text: `#E9E6E0`
- Secondary text: `#A49F96`
- Accent: `#E8A33D`

Fonts are configured in `app/layout.tsx`, `app/globals.css`, and
`tailwind.config.ts`.

## Deploy

The app is ready for Vercel. Canonical URLs use `NEXT_PUBLIC_SITE_URL` when it
is configured and otherwise use Vercel's `VERCEL_PROJECT_PRODUCTION_URL` system
variable. Local builds fall back to `http://localhost:3000`.

1. Push the project to GitHub.
2. Create a new Vercel project from the repository.
3. Set `NEXT_PUBLIC_SITE_URL` to the final custom domain if you have one, or
   enable Vercel system environment variables.
4. Deploy with the default Next.js settings.
