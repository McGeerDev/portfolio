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

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [pnpm](https://pnpm.io/) (or use npm/yarn if you prefer)

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

## sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

### Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
