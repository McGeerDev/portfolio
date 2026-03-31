# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
pnpm dev          # Build content + Vite dev server on localhost:5173
pnpm build        # Build content + sitemap + Vite production build to ./dist
pnpm preview      # Preview production build
pnpm lint         # ESLint (typescript-eslint + react-hooks + react-refresh)
pnpm check        # TypeScript type checking (tsc --noEmit)
pnpm format       # Prettier (tabs, no semicolons, single quotes, 100 chars)
```

No test framework is configured.

## Architecture

**Static portfolio SPA** built with React 19, Vite, TypeScript, Tailwind CSS 4, deployed to GitHub Pages at `mcgeer.dev`.

### Content Pipeline

Blog posts live as `.mdx` files in `content/blogs/` with YAML frontmatter (`title`, `description`, `date`, `published`, `tech[]`). The rendering pipeline:

1. `scripts/build-content.ts` reads files at build time, parses frontmatter via `gray-matter`, filters by `published: true` and `date <= now`
2. Outputs `public/content/posts.json` (post metadata) and `public/content/blogs/{slug}.md` (raw markdown bodies)
3. `src/pages/BlogPost.tsx` fetches markdown at runtime and renders with `react-markdown` + `remark-gfm`
4. Prose styling from `@tailwindcss/typography`

`public/content/` is gitignored — it's generated output.

### Routing

Client-side routing via `react-router-dom` in `src/App.tsx`. GitHub Pages SPA support via `404.html` (copy of `index.html`, created in build script).

### Key Architectural Decisions

- **SPA on GitHub Pages**: `BrowserRouter` + `404.html` fallback trick for clean URLs
- **Build-time content**: MDX files compiled to static JSON/MD at build time, fetched at runtime — no Node.js in browser
- **Sitemap generation**: `scripts/generate-sitemap.ts` runs before Vite build
- **CSP**: Content Security Policy in `index.html` meta tag
- **XSS protection**: `scripts/build-content.ts` sanitizes metadata (HTML entity escaping)

### Styling

Tailwind v4 with custom theme in `src/globals.css` using `@theme` block with `oklch()` color tokens. Two font families via Google Fonts: Lekton (body), Lexend Zetta (display). System font stack for sans. Heavy letter-spacing is an intentional design choice.

### CI/CD

- `.github/workflows/ci.yml`: Lint + type check on push/PR
- `.github/workflows/deploy.yml`: Build + deploy to GitHub Pages on push to main (also daily schedule with commit check). Outputs to `dist/`

### Path Alias

`@/*` maps to `./src/*` (configured in both tsconfig.json and vite.config.ts).
