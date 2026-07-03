# Chaitanya Portfolio

A terminal-inspired personal portfolio for Chaitanya Galla, built with Next.js,
TypeScript, Tailwind CSS, and Framer Motion. The site focuses on full-stack
engineering, AI agent work, production metrics, experience, and a build log.

## Highlights

- Animated hero with a replayed Job Scout Agent terminal run
- Project case studies with metrics, stack notes, live links, and source links
- About, skills, experience, build log, and contact sections
- Content-driven portfolio data in `lib/data.ts`
- Warm dark "Terminal Dusk" visual system with accessible focus states
- Motion effects that respect `prefers-reduced-motion`

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
| `lib/data.ts` | Portfolio content: links, projects, skills, logs, and experience |
| `tailwind.config.ts` | Theme tokens, font families, colors, and animation config |
| `app/globals.css` | Base styles, scrollbar, link effects, focus states, and motion settings |

## Update Content

Most editable content lives in `lib/data.ts`:

- `links`: email, GitHub, LinkedIn, X, and resume URLs
- `projects`: case studies, metrics, stack notes, live demos, and source links
- `skillGroups`: grouped skills with tooltip notes
- `buildLog`: dated updates and build-in-public notes
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

The app is ready for Vercel:

1. Push the project to GitHub.
2. Create a new Vercel project from the repository.
3. Deploy with the default Next.js settings.
