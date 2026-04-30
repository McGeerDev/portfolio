
[![CI](https://github.com/McGeerDev/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/McGeerDev/portfolio/actions/workflows/ci.yml)

# mcgeer.dev &mdash; Devan McGeer

Source for [mcgeer.dev](https://mcgeer.dev/) — a personal portfolio and SRE resume site.

## Stack

Zero-JavaScript static site. Hand-written HTML and a single CSS file, self-hosted fonts, deployed to GitHub Pages. No framework, no build step.

## Project Structure

- `static-build/` &mdash; Deploy target. Served as-is to GitHub Pages. Edit HTML/CSS here.
- `src/` &mdash; Legacy React/Vite source, being removed in a follow-up PR. Do not add features here.
- `content/blogs/` &mdash; MDX blog posts (not currently wired to the static site).
- `.github/workflows/deploy.yml` &mdash; Uploads `static-build/` to Pages on push to `main`.
- `.github/workflows/ci.yml` &mdash; Lint + type-check on pull requests.

## Local Preview

No build step required. Serve `static-build/` with any static file server:

```sh
python3 -m http.server 8000 --directory static-build/
```

Then open [http://localhost:8000](http://localhost:8000).

## Linting & Formatting

```sh
pnpm install       # install tooling deps
pnpm format        # Prettier (tabs, singleQuote, semi:false, printWidth:100)
pnpm lint          # ESLint
pnpm check         # TypeScript type-check
```

Run `pnpm format` before committing. CI enforces `pnpm lint` and `pnpm check` on every PR.
