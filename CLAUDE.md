# mcgeer.dev Portfolio

Personal portfolio and technical blog for Devan McGeer (SRE). Deployed to GitHub Pages at mcgeer.dev.

## Stack

React 19 · TypeScript 6 · Tailwind CSS 4 · Vite 8 · React Router 7 · pnpm 10 · Node 22

## Commands

```sh
mise run dev        # dev server on localhost:5173
mise run build      # full production build (content → sitemap → bundle → 404.html)
mise run lint       # ESLint — zero output on success
mise run check      # tsc --noEmit — zero output on success
mise run format     # Prettier
```

## Architecture

| Path | Purpose |
|---|---|
| `src/` | React app (components, pages, types) |
| `content/blogs/*.md` | Blog post source (Markdown) |
| `public/content/posts.json` | Generated blog index — do not edit directly |
| `scripts/build-content.ts` | Parses `content/blogs/` → `public/content/posts.json` |
| `scripts/generate-sitemap.ts` | Generates `dist/sitemap.xml` post-build |
| `static-build/` | Pre-built static assets (fonts, resume) |
| `dist/404.html` | Copy of `index.html` — enables SPA routing on GitHub Pages |

## Key Patterns

- **Blog content:** Edit Markdown in `content/blogs/`; `build-content.ts` derives the JSON index.
- **Routing:** React Router SPA; `dist/404.html = dist/index.html` handles GitHub Pages 404 redirects.
- **CSP:** `%VITE_CSP%` placeholder in `index.html` is substituted at build time via Vite.
- **Fonts:** Preloaded with SRI hashes in `index.html`; update hashes if fonts change.

## CI/CD

- `ci.yml` — lint + type check on every PR
- `deploy.yml` — builds and deploys to GitHub Pages on push to `main`

## Authority

Global persona, tutoring, and SRE calibration live in `~/.claude/CLAUDE.md`. This file is local HOW-TO only.
