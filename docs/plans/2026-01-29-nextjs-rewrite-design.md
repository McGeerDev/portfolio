# Portfolio Rewrite: SvelteKit to Next.js

## Overview

Rewrite the portfolio site from SvelteKit to Next.js with static export,
keeping the same visual foundation with minor layout updates. Deploy to
GitHub Pages via GitHub Actions.

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── content/
│   └── blogs/
│       └── first.mdx
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── blogs/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── projects/
│   │   │   └── page.tsx
│   │   └── resume/
│   │       └── page.tsx
│   ├── components/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── hero.tsx
│   │   └── pill.tsx
│   └── lib/
│       └── mdx.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Content & MDX Pipeline

Blog posts live in `content/blogs/` as `.mdx` files with frontmatter:

```yaml
---
title: My first blog post
description: Post ala blog
date: '1995-02-27'
published: true
tech:
  - Nextjs
  - Neovim
---
```

`lib/mdx.ts` exposes:

- `getAllPosts()` — reads `content/blogs/`, parses frontmatter with
  `gray-matter`, returns sorted metadata. Filters `published: false`.
- `getPostBySlug(slug)` — reads a single file, serializes MDX via
  `next-mdx-remote/rsc` for React Server Components.

Slugs derived from filename. `generateStaticParams()` enumerates all
slugs at build time for static export.

## Styling

- Tailwind CSS v4 with `@tailwindcss/typography` for blog prose
- Same HSL color system ported into `globals.css` as CSS custom properties
- Fonts via `next/font/google`: Lexend Zetta (display), Lekton (body),
  Inter (fallback)
- Icons: `lucide-react` replaces `@iconify/svelte`
- No dark mode toggle (color vars ready for future use)

## Pages

### Homepage (`/`)

Hero banner, about section (2-column grid), skills pills. Same content,
tightened responsive breakpoints.

### Blog listing (`/blogs`)

Lists all published posts with title, description, date.

### Blog post (`/blogs/[slug]`)

Renders MDX content with typography plugin styling.

### Projects (`/projects`) — scaffold

Hero banner + empty grid with placeholder. Ready for future content.

### Resume (`/resume`) — scaffold

Hero banner + empty content area. Ready for future sections.

## Shared Layout

- Sticky header: nav links (HOME, BLOG, PROJECTS, RESUME), DM branding
  (desktop), social icons (GitHub, LinkedIn, Mail), mobile hamburger menu
- Footer: social links, DEVAN MCGEER branding

## GitHub Actions Deployment

Replace `gh-pages` package with Actions workflow:

```yaml
# .github/workflows/deploy.yml
# Trigger: push to main
# Steps:
#   1. Checkout, Node 22, pnpm install
#   2. next build (static export to out/)
#   3. Add CNAME (mcgeer.dev)
#   4. Deploy via actions/deploy-pages
```

`next.config.ts` sets `output: 'export'` and `images.unoptimized: true`.

Existing CI workflow updated to run `next lint` and `tsc --noEmit`.
`release-please.yaml`, `audit.yaml`, `codeql-analysis.yml` carry over.

## Dependencies

### Added

- `next`, `react`, `react-dom`
- `next-mdx-remote`, `gray-matter`
- `tailwindcss`, `@tailwindcss/typography`
- `lucide-react`

### Removed

- `svelte`, `@sveltejs/kit`, `@sveltejs/adapter-static`
- `mdsvex`
- `@iconify/svelte`
- `gh-pages`

## Migration Notes

- `.svx` files converted to `.mdx` (minimal syntax changes — remove
  any Svelte-specific syntax, replace with JSX if needed)
- Svelte reactive declarations become React state/hooks
- Mobile menu state via `useState` instead of Svelte reactivity
