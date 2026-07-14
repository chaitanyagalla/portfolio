# Current Portfolio Design Spec

## Design Direction

Quiet technical portfolio with a terminal-led personality. The design feels like a build log, spec sheet, and developer console rather than a marketing page.

Core feel:

- Dark warm graphite surface.
- Amber accent used sparingly.
- Hairline rules instead of cards.
- Mono labels and tabular metrics.
- Clear sections with a left ledger label and right content column.
- Terminal replay as the main interactive proof point.

## Tokens

Colors:

- `ink` / page: `#131211`
- `well` / terminal inset: `#0C0B0A`
- `line` / rules: `#292621`
- `fog` / primary text: `#E9E6E0`
- `mist` / secondary text: `#A49F96`
- `dim` / tertiary text: `#6F6A61`
- `amber` / accent: `#E8A33D`
- `ok` / terminal success: `#8CC97F`

Typography:

- Display/body: Archivo Variable.
- Mono/system detail: IBM Plex Mono.
- Hero H1: 4.4rem desktop, 2.6rem mobile, 1.04 line height.
- Section H3: 2rem desktop, 1.5rem mobile.
- Body: 14.5px to 15px, relaxed line height.
- Mono labels: 11px to 13px, uppercase labels use 0.2em tracking.

Spacing and layout:

- Max content width: 72rem / `max-w-6xl`.
- Page side padding: 24px.
- Fixed nav height: 64px.
- Hero top padding: 128px mobile, 160px larger screens.
- Section vertical padding: 80px mobile, 96px larger screens.
- Desktop section grid: `180px` label column plus flexible content column.
- Section separators: 1px `line` borders.
- Cards are intentionally avoided; repeated items are separated with rules.

## Components

Navigation:

- Fixed top header.
- Transparent at top, then `ink/85` with blur and bottom border after scroll.
- Desktop links: work, about, log, contact, resume.
- Mobile: name plus resume CTA only.

Hero:

- Mono status line.
- Large statement with `AI agents` highlighted in amber.
- Short proof paragraph with dotted receipt underlines.
- CTA links: `see the work` and `github`.
- Horizontal rule before terminal.

Terminal demo:

- Full-width bordered panel.
- `well` background with title bar.
- Session label on left, amber replay status on right.
- Fixed transcript height: 300px mobile, 320px desktop.
- Typed command replay loops.
- Reduced-motion users see static transcript.

Section shell:

- Top border across full viewport.
- Inner max-width grid.
- Sticky mono label on desktop.
- Content occupies right column.

Projects:

- Three project entries.
- Each entry has name, meta, tagline, paragraph, metrics row, stack line, and links.
- Metrics use tabular figures and a top rule.
- Stack items use dotted receipt tooltip.

About:

- Short positioning headline and paragraph.
- Skills arranged in plain ruled columns.
- Experience as bordered rows.

Build log:

- Intro copy with social links.
- Timeline rows with mono date column and text content.

Contact:

- Strong closing headline.
- Amber email link with copy button.
- Footer has social links, Hyderabad local time, copyright/font/framework note.

## Interaction Notes

- Links use a left-to-right underline animation.
- Receipt items show a small tooltip on hover/focus.
- Sections reveal with a subtle fade-up animation.
- Terminal types character by character and loops.
- Focus states use a 2px amber outline.

## What To Preserve When Redesigning

- Keep the terminal proof point or replace it with an equally strong live proof.
- Keep metrics visible near projects.
- Keep the visual hierarchy calm and technical.
- Avoid turning every section into a card.
- Use amber as a signal, not a background theme.
- Preserve the quick-scan structure: label, headline, proof, numbers, links.
