[![CI](https://github.com/McGeerDev/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/McGeerDev/portfolio/actions/workflows/ci.yml)

# mcgeer.dev &mdash; Devan McGeer

Source for [mcgeer.dev](https://mcgeer.dev/) &mdash; personal portfolio and SRE résumé site.

## Stack

Hand-written HTML + CSS. No JavaScript, no build step, no dependencies. Deployed to GitHub Pages.

## Project Structure

- `index.html` &mdash; home page
- `404.html` &mdash; GitHub Pages 404 fallback
- `style.css` &mdash; all styles, single file
- `resume/index.html` &mdash; `/resume/` page
- `favicon.svg`, `og-image.png` &mdash; site icons and social card
- `robots.txt`, `sitemap.xml` &mdash; crawler directives
- `CNAME` &mdash; custom domain (`mcgeer.dev`)
- `fonts/` &mdash; self-hosted `woff2` (Lekton 400/700, Lexend Zetta 400)
- `assets/` &mdash; résumé PDF and headshot
- `.impeccable.md` &mdash; brand, users, and design principles
- `.github/workflows/` &mdash; `ci.yml` and `deploy.yml`

## Local preview

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000/>.

## CI/CD

- `ci.yml` &mdash; validates HTML and checks links on pull requests.
- `deploy.yml` &mdash; publishes to GitHub Pages on push to `main`, with a daily cron rebuild gated on recent commits.

## License

MIT &mdash; see [`LICENSE`](./LICENSE) at the repo root.
