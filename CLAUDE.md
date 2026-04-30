# mcgeer.dev Portfolio

Personal portfolio and résumé site for Devan McGeer (SRE). Deployed to GitHub Pages at mcgeer.dev.

## Stack

Hand-written HTML + CSS · no JS · no build step · GitHub Pages

## Layout

| Path | Purpose |
|---|---|
| `index.html` | Home page |
| `404.html` | GitHub Pages 404 fallback (standalone page, not SPA) |
| `style.css` | All styles, single file |
| `resume/index.html` | `/resume/` page |
| `fonts/` | Self-hosted woff2 (lekton-400, lekton-700, lexend-zetta-400) |
| `assets/` | `devan-mcgeer-cv.pdf`, `headshot.webp` |
| `favicon.svg`, `og-image.png` | Site icons + social card |
| `robots.txt`, `sitemap.xml` | Crawler hints |
| `CNAME` | Pins custom domain `mcgeer.dev` |
| `_headers` | Cache-Control rules for Cloudflare Pages migration (no-op on GitHub Pages) |
| `.impeccable.md` | Design context — brand, users, principles |

## Local preview

```sh
python3 -m http.server 8000
# open http://localhost:8000/
```

## CI/CD

- `ci.yml` — `html5validator` + `lychee` link check on every PR
- `deploy.yml` — stages site files into `_site/` and publishes to GitHub Pages on push to `main`; daily cron rebuild gated on whether there were commits in the last 24h

## Key Patterns

- **Single CSS file:** `style.css`. No preprocessor, no framework.
- **404 handling:** `404.html` is a real standalone page. GitHub Pages serves it on unmatched paths — not a SPA fallback.
- **Fonts:** Self-hosted woff2 in `/fonts/`, preloaded with `crossorigin` from `index.html`. No CDN, no SRI needed.
- **CSP:** Hard-coded in each HTML file's `<meta http-equiv="Content-Security-Policy">` tag. No build-time substitution.
- **Custom domain:** `CNAME` pins `mcgeer.dev`.
- **Cache headers:** GitHub Pages serves all assets with `Cache-Control: max-age=600` and ignores any per-file config. The `_headers` file is dormant on the current host but ready for a Cloudflare Pages migration, where it sets per-path TTLs. Do not add `immutable` until filename hashing lands.
- **Design decisions:** Consult `.impeccable.md` before changing visuals — brand, users, and design principles live there.

## Authority

Global persona, tutoring, and SRE calibration live in `~/.claude/CLAUDE.md`. This file is local HOW-TO only.
