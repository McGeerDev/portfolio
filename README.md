
[![CI](https://github.com/McGeerDev/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/McGeerDev/portfolio/actions/workflows/ci.yml)

# mcgeer.dev &mdash; Devan McGeer

Source for [mcgeer.dev](https://mcgeer.dev/) — a personal portfolio and SRE resume site.

## Stack

React 19 · TypeScript · Tailwind CSS v4 · Vite · pnpm · Node 22. Deployed to GitHub Pages.

## Project Structure

- `src/` &mdash; React app. Entry point: `src/main.tsx`.
- `content/blogs/` &mdash; Markdown blog posts; compiled to `public/content/posts.json` at build time.
- `dist/` &mdash; Vite output (`outDir` in `vite.config.ts`). `dist/404.html` mirrors `index.html` for GitHub Pages SPA routing.
- `static-build/` &mdash; Pre-built static assets (fonts, resume).
- `.github/workflows/deploy.yml` &mdash; Builds and deploys `dist/` to Pages on push to `main`.
- `.github/workflows/ci.yml` &mdash; Lint + type-check on pull requests.

## Development

```sh
pnpm install       # install dependencies
pnpm dev           # dev server at http://localhost:5173 (runs build-content first)
```

## Build & Preview

```sh
pnpm build         # content → sitemap → vite build → dist/
pnpm preview       # preview the production build locally
```

## Linting & Formatting

```sh
pnpm format        # Prettier
pnpm lint          # ESLint
pnpm check         # TypeScript type-check (tsc --noEmit)
```

Run `pnpm format` before committing. CI enforces `pnpm lint` and `pnpm check` on every PR.
