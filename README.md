# chaitanya.dev — Terminal Dusk portfolio

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Geist fonts

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. vercel.com → New Project → import the repo
3. Zero config needed — Vercel auto-detects Next.js. Deploy.

## Before you ship — replace placeholders

Everything editable lives in **`lib/data.ts`**:

- `links` — GitHub, LinkedIn, X, hosted resume URL (all `example.com` right now)
- `projects[].live` / `projects[].code` — real demo + repo URLs
- `buildLog` — swap in your latest build-in-public posts as you go

## Where things live

| File | What it is |
|---|---|
| `lib/data.ts` | ALL content — projects, skills, log, links |
| `components/TerminalDemo.tsx` | animated agent-run terminal in the hero (edit `script` array to change the transcript) |
| `components/Tooltip.tsx` | reusable hover tooltip (used on skills + stack chips) |
| `tailwind.config.ts` | color tokens — ink, panel, lime, violet, amber |
| `app/globals.css` | grid texture, gradient text, scrollbar, reduced-motion |

## Design system — "Terminal Dusk"

- Background `#0A0A0B` · surfaces `#111113` · borders `#1F1F23`
- Primary accent `#A3FF12` (lime) · secondary `#8B7CFF` (violet) · terminal warnings `#FFB224` (amber)
- Geist Sans (UI) + Geist Mono (terminal, labels, chips)
- All animations respect `prefers-reduced-motion`
