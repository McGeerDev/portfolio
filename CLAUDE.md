# CLAUDE.md

> Project-level rules. Global persona, language, and SRE context live in `~/.claude/CLAUDE.md`.

## Why

Personal portfolio at `mcgeer.dev` — Devan McGeer's public SRE presence.

## What

| Path | Purpose |
|---|---|
| `static-build/` | **Deploy target** — hand-written HTML/CSS, zero JS, zero build step |
| `src/` | React/Vite source — being phased out, do not add features here |
| `.github/workflows/deploy.yml` | Uploads `static-build/` to GitHub Pages on push to main |
| `.github/workflows/ci.yml` | Lint + type-check on PR (validates remaining React source) |

## How

**VCS is jj, not git.**
- New change: `jj new`
- Describe: `jj desc -m "type(scope): subject"`
- Move bookmark and push: `jj bookmark set <name> && jj git push --bookmark <name>`

**Commits:** Conventional format — `type(scope): imperative subject`, body explains why.

**Format before committing:** `pnpm format` (Prettier — tabs, singleQuote, semi:false, printWidth:100).

**CI:** `pnpm lint && pnpm check` — ESLint + TypeScript, must be clean on PR.

**Static site has no build step.** `static-build/` is deployed as-is. All asset paths are absolute (`/style.css`, `/fonts/*.woff2`, `/assets/`).
