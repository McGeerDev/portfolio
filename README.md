
[![CI](https://github.com/McGeerDev/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/McGeerDev/portfolio/actions/workflows/ci.yml)

# mcgeer.dev &mdash; Devan McGeer Portfolio

Welcome to the source code for my personal portfolio and blog, [mcgeer.dev](https://mcgeer.dev/).  
This site showcases my work as a Site Reliability Engineer, my blog posts, and the tools and technologies I use.

## Features

- Personal portfolio and project highlights
- Technical blog (written in Markdown/SVX)
- Built with [SvelteKit](https://kit.svelte.dev/), [Tailwind CSS](https://tailwindcss.com/), and [TypeScript](https://www.typescriptlang.org/)
- Responsive, fast, and modern design

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

### Install dependencies

```sh
pnpm install
```

### Run the development server

```sh
pnpm run dev
```

The site will be available at [http://localhost:5173](http://localhost:5173) by default.

### Build for production

```sh
pnpm run build
```

### Preview the production build

```sh
pnpm run preview
```

## Project Structure

- `src/` &mdash; Main source code (routes, components, styles, blog content)
- `src/content/blogs/` &mdash; Blog posts in Markdown/SVX
- `public/` &mdash; Static assets
- `build/` &mdash; Production build output
- `docs/` &mdash; (Optional) Static site output for GitHub Pages
