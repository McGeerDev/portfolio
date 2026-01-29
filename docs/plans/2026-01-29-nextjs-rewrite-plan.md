# Next.js Rewrite Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rewrite the SvelteKit portfolio as a Next.js static site with MDX blog support, deployed to GitHub Pages.

**Architecture:** Next.js App Router with static export (`output: 'export'`). Content lives in `content/blogs/` as `.mdx` files parsed by `next-mdx-remote/rsc` + `gray-matter`. Tailwind CSS v4 with the existing HSL color system.

**Tech Stack:** Next.js 15, React 19, Tailwind CSS v4, next-mdx-remote, gray-matter, lucide-react

---

### Task 1: Scaffold Next.js Project

**Files:**
- Delete: All Svelte files (`src/routes/`, `src/lib/`, `svelte.config.js`, `vite.config.ts`)
- Create: `next.config.ts`
- Create: `tsconfig.json` (overwrite existing)
- Modify: `package.json`
- Keep: `.github/`, `docs/`, `public/`, `static/`

**Step 1: Remove Svelte source files**

```bash
rm -rf src/routes src/lib src/content svelte.config.js vite.config.ts index.html
rm -f src/app.css src/app.d.ts src/app.html
```

**Step 2: Update `package.json`**

Replace the contents with a clean Next.js package.json. Keep `name`, `private`, `version`. Update scripts:

```json
{
  "name": "portfolio",
  "private": true,
  "version": "0.0.1",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "check": "tsc --noEmit",
    "format": "prettier --write ."
  }
}
```

**Step 3: Install dependencies**

```bash
pnpm add next@latest react@latest react-dom@latest next-mdx-remote gray-matter lucide-react
pnpm add -D typescript @types/react @types/react-dom tailwindcss@latest @tailwindcss/typography @tailwindcss/postcss postcss eslint eslint-config-next prettier prettier-plugin-tailwindcss
```

**Step 4: Create `next.config.ts`**

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

**Step 5: Create `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

**Step 6: Create `postcss.config.mjs`**

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

**Step 7: Move static assets**

```bash
mv static/favicon.svg public/favicon.svg
mv static/robots.txt public/robots.txt
rm -rf static
```

**Step 8: Verify scaffolding**

Run: `pnpm install`
Expected: Clean install, no errors.

**Step 9: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js project, remove SvelteKit"
```

---

### Task 2: Global Styles and Fonts

**Files:**
- Create: `src/app/globals.css`
- Create: `src/app/layout.tsx`

**Step 1: Create `src/app/globals.css`**

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";

@theme {
  --font-sans: "Inter", sans-serif;
  --font-display: "Lexend Zetta", sans-serif;
  --font-body: "Lekton", sans-serif;

  --color-border: hsl(214.3 31.8% 91.4%);
  --color-input: hsl(214.3 31.8% 91.4%);
  --color-ring: hsl(222.2 84% 4.9%);
  --color-background: hsl(0 0% 100%);
  --color-foreground: hsl(222.2 84% 4.9%);
  --color-primary: hsl(222.2 47.4% 11.2%);
  --color-primary-foreground: hsl(210 40% 98%);
  --color-secondary: hsl(210 40% 96.1%);
  --color-secondary-foreground: hsl(222.2 47.4% 11.2%);
  --color-muted: hsl(210 40% 96.1%);
  --color-muted-foreground: hsl(215.4 16.3% 46.9%);
  --color-accent: hsl(210 40% 96.1%);
  --color-accent-foreground: hsl(222.2 47.4% 11.2%);
  --color-destructive: hsl(0 84.2% 60.2%);
  --color-destructive-foreground: hsl(210 40% 98%);
  --color-card: hsl(0 0% 100%);
  --color-card-foreground: hsl(222.2 84% 4.9%);
  --color-popover: hsl(0 0% 100%);
  --color-popover-foreground: hsl(222.2 84% 4.9%);

  --radius: 0.5rem;
}
```

**Step 2: Create `src/app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import { Inter, Lekton, Lexend_Zetta } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const lekton = Lekton({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

const lexendZetta = Lexend_Zetta({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Devan McGeer",
  description: "Site Reliability Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lekton.variable} ${lexendZetta.variable} font-body flex min-h-screen flex-col bg-white text-black antialiased`}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  );
}
```

**Step 3: Create a placeholder `src/app/page.tsx`**

```tsx
export default function Home() {
  return <p>Portfolio</p>;
}
```

**Step 4: Verify dev server starts**

Run: `pnpm dev`
Expected: App loads at localhost:3000 with "Portfolio" text, fonts applied.

**Step 5: Verify build works**

Run: `pnpm build`
Expected: Static export completes, `out/` directory created.

**Step 6: Commit**

```bash
git add -A
git commit -m "feat: add global styles, fonts, and root layout"
```

---

### Task 3: Shared Components (Header, Footer, Hero, Pill)

**Files:**
- Create: `src/components/header.tsx`
- Create: `src/components/footer.tsx`
- Create: `src/components/hero.tsx`
- Create: `src/components/pill.tsx`
- Modify: `src/app/layout.tsx` (add Header and Footer)

**Step 1: Create `src/components/pill.tsx`**

```tsx
export function Pill({ text }: { text: string }) {
  return (
    <span className="border border-black px-4 py-1 text-sm tracking-wider shadow-md">
      {text}
    </span>
  );
}
```

**Step 2: Create `src/components/hero.tsx`**

```tsx
export function Hero({
  title = "Devan McGeer",
  subtitle = "Site Reliability Engineer",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="py-16 text-center sm:py-24">
      <h1 className="font-display text-4xl leading-tight font-light tracking-widest sm:text-6xl md:text-7xl">
        {title.toUpperCase()}
      </h1>
      <p className="mt-6 text-lg tracking-[0.3em] text-gray-700 sm:text-xl sm:tracking-[0.4em] md:text-2xl">
        {subtitle.toUpperCase()}
      </p>
    </div>
  );
}
```

**Step 3: Create `src/components/footer.tsx`**

```tsx
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const name = "DEVAN MCGEER";

  return (
    <footer className="flex flex-col items-center border-t py-6">
      <div className="flex flex-wrap justify-center space-x-4">
        <a
          href="https://github.com/McGeerDev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/devan-mcgeer/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
        <a href="mailto:mcgeer.devan@gmail.com" aria-label="Email">
          <Mail size={24} />
        </a>
      </div>
      <div>
        <p className="text-md mt-4 tracking-[0.3em] text-gray-700 sm:text-lg sm:tracking-[0.4em] md:text-xl">
          {name}
        </p>
      </div>
    </footer>
  );
}
```

**Step 4: Create `src/components/header.tsx`**

```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/blogs", label: "BLOG" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/resume", label: "RESUME" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex flex-col py-6">
      <nav className="flex w-full items-center justify-between">
        <div className="hidden text-2xl font-bold tracking-wider md:flex">
          <Link href="/">DM</Link>
        </div>

        <div className="hidden gap-4 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="tracking-widest hover:text-gray-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden space-x-4 md:flex">
          <a
            href="https://github.com/McGeerDev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/devan-mcgeer/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a href="mailto:mcgeer.devan@gmail.com" aria-label="Email">
            <Mail size={24} />
          </a>
        </div>

        {/* Mobile */}
        <div className="flex w-full items-center justify-between md:hidden">
          <div className="flex gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest hover:text-gray-600"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
```

**Step 5: Update `src/app/layout.tsx` to include Header and Footer**

Add imports and wrap `{children}` with Header, hr, main, and Footer — matching the original Svelte layout:

```tsx
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// ... inside the body div:
<Header />
<hr className="border-black" />
<main className="flex-1">{children}</main>
<Footer />
```

**Step 6: Verify layout renders**

Run: `pnpm dev`
Expected: Header with nav links, footer with social icons, "Portfolio" in main.

**Step 7: Commit**

```bash
git add -A
git commit -m "feat: add header, footer, hero, and pill components"
```

---

### Task 4: Homepage

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Implement homepage**

```tsx
import { Hero } from "@/components/hero";
import { Pill } from "@/components/pill";

const skills = [
  "gRPC",
  "Docker",
  "Terraform",
  "Golang",
  "GCP",
  "Pub/Sub",
  "MongoDB",
  "React",
  "Next.js",
  "Svelte",
  "Bash",
];

export default function Home() {
  return (
    <>
      <Hero title="Devan McGeer" subtitle="Site Reliability Engineer" />

      <hr className="border-black" />

      <div className="py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-xl font-bold tracking-widest">
              ABOUT ME
            </h2>
            <p className="text-base leading-relaxed text-gray-800">
              I believe people come first, and with Developers being my
              customers, I have improved their lives in every way I can; by
              building observability into their environments, speeding up CICD
              pipelines and automating away toil like package updates. My
              position as SRE has been as fulfilling as it has been challenging.
              Sometimes the way to improve someone&apos;s life is simply to
              merge a pull request for them or to make them coffee when they
              don&apos;t ask.
              <br />
              Be good, be kind.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-bold tracking-widest">
              TECH I KNOW
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Pill key={skill} text={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
```

**Step 2: Verify homepage**

Run: `pnpm dev`
Expected: Hero banner, about section, skills pills — matching original layout.

**Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: implement homepage with hero, about, and skills"
```

---

### Task 5: MDX Pipeline

**Files:**
- Create: `src/lib/mdx.ts`
- Create: `content/blogs/first.mdx` (migrated from `.svx`)

**Step 1: Create `content/blogs/first.mdx`**

```mdx
---
title: My first blog post
description: Post ala blog
date: '1995-02-27'
published: true
tech:
  - Nextjs
  - Neovim
---

# First post

This is the first post. Here is how you build the production version of the app

```typescript
pnpm run build
```
```

**Step 2: Create `src/lib/mdx.ts`**

```typescript
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content/blogs");

export interface PostMeta {
  title: string;
  description: string;
  date: string;
  published: boolean;
  tech: string[];
  slug: string;
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  const posts = files
    .map((filename) => {
      const filePath = path.join(contentDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        ...(data as Omit<PostMeta, "slug">),
        slug: filename.replace(/\.mdx$/, ""),
      };
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    metadata: data as Omit<PostMeta, "slug">,
    content,
  };
}
```

**Step 3: Verify the module compiles**

Run: `pnpm check`
Expected: No TypeScript errors.

**Step 4: Commit**

```bash
git add content/blogs/first.mdx src/lib/mdx.ts
git commit -m "feat: add MDX content pipeline and migrate blog post"
```

---

### Task 6: Blog Pages

**Files:**
- Create: `src/app/blogs/page.tsx`
- Create: `src/app/blogs/[slug]/page.tsx`

**Step 1: Create `src/app/blogs/page.tsx`**

```tsx
import Link from "next/link";
import { Hero } from "@/components/hero";
import { getAllPosts } from "@/lib/mdx";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Hero title="Devan McGeer" subtitle="Blog" />

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.slug}>
            <Link
              href={`/blogs/${post.slug}`}
              className="tracking-widest hover:text-gray-600"
            >
              {post.title.toUpperCase()}
            </Link>
            <p className="text-sm text-gray-600">{post.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
```

**Step 2: Create `src/app/blogs/[slug]/page.tsx`**

```tsx
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Hero } from "@/components/hero";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const { metadata, content } = await getPostBySlug(slug);

    return (
      <>
        <Hero title={metadata.title} subtitle={metadata.description} />
        <article className="prose max-w-none">
          <MDXRemote source={content} />
        </article>
      </>
    );
  } catch {
    notFound();
  }
}
```

**Step 3: Verify blog pages**

Run: `pnpm dev`
Expected: `/blogs` lists the first post. `/blogs/first` renders the MDX content.

**Step 4: Verify static build**

Run: `pnpm build`
Expected: Both `/blogs` and `/blogs/first` are pre-rendered in `out/`.

**Step 5: Commit**

```bash
git add src/app/blogs/
git commit -m "feat: add blog listing and dynamic blog post pages"
```

---

### Task 7: Scaffold Pages (Projects & Resume)

**Files:**
- Create: `src/app/projects/page.tsx`
- Create: `src/app/resume/page.tsx`

**Step 1: Create `src/app/projects/page.tsx`**

```tsx
import { Hero } from "@/components/hero";

export default function Projects() {
  return (
    <>
      <Hero title="Devan McGeer" subtitle="Projects" />
      <p className="text-center tracking-widest text-gray-500">Coming soon</p>
    </>
  );
}
```

**Step 2: Create `src/app/resume/page.tsx`**

```tsx
import { Hero } from "@/components/hero";

export default function Resume() {
  return (
    <>
      <Hero title="Devan McGeer" subtitle="Resume" />
      <p className="text-center tracking-widest text-gray-500">Coming soon</p>
    </>
  );
}
```

**Step 3: Verify both pages**

Run: `pnpm dev`
Expected: `/projects` and `/resume` render with hero and placeholder text.

**Step 4: Commit**

```bash
git add src/app/projects/ src/app/resume/
git commit -m "feat: scaffold projects and resume pages"
```

---

### Task 8: GitHub Actions Workflows

**Files:**
- Create: `.github/workflows/deploy.yml`
- Modify: `.github/workflows/ci.yml`

**Step 1: Create `.github/workflows/deploy.yml`**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: pnpm/action-setup@v4
        with:
          version: 8

      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: pnpm

      - run: pnpm install
      - run: pnpm build

      - name: Add CNAME
        run: echo "mcgeer.dev" > out/CNAME

      - uses: actions/upload-pages-artifact@v3
        with:
          path: out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

**Step 2: Update `.github/workflows/ci.yml`**

Replace the lint-all job's last two run commands:

```yaml
      - run: pnpm run lint
      - run: pnpm run check
```

These commands already match our new `package.json` scripts (`next lint` and `tsc --noEmit`), so the CI workflow structure stays the same. Just remove the commented-out `pkg-pr-new` job block to clean up.

**Step 3: Verify CI commands work locally**

Run: `pnpm lint && pnpm check`
Expected: No errors.

**Step 4: Commit**

```bash
git add .github/workflows/
git commit -m "feat: add GitHub Pages deploy workflow, update CI"
```

---

### Task 9: Cleanup and Final Verification

**Files:**
- Delete: `postcss.config.js` (old, replaced by `postcss.config.mjs`)
- Delete: `tailwind.config.js` (Tailwind v4 uses CSS-based config)
- Modify: `.prettierrc` (remove svelte plugin, keep tailwind plugin)
- Delete: `eslint.config.js` (Next.js uses `.eslintrc` convention or `next lint` defaults)

**Step 1: Remove stale config files**

```bash
rm -f postcss.config.js tailwind.config.js eslint.config.js
```

**Step 2: Update `.prettierrc`**

Remove `prettier-plugin-svelte` from plugins if present. Keep `prettier-plugin-tailwindcss`.

**Step 3: Run full build**

Run: `pnpm build`
Expected: Static export completes. `out/` contains `index.html`, `blogs/`, `blogs/first/`, `projects/`, `resume/`.

**Step 4: Verify output structure**

```bash
ls out/
ls out/blogs/
ls out/blogs/first/
ls out/projects/
ls out/resume/
```

Expected: Each directory contains `index.html`.

**Step 5: Commit**

```bash
git add -A
git commit -m "chore: remove stale Svelte config files"
```

---

## Summary

| Task | Description | Depends On |
|------|-------------|------------|
| 1 | Scaffold Next.js, remove Svelte | — |
| 2 | Global styles, fonts, root layout | 1 |
| 3 | Shared components (header, footer, hero, pill) | 2 |
| 4 | Homepage | 3 |
| 5 | MDX pipeline | 1 |
| 6 | Blog pages | 3, 5 |
| 7 | Scaffold projects & resume pages | 3 |
| 8 | GitHub Actions workflows | 1 |
| 9 | Cleanup & final verification | all |

Tasks 4, 5, 7, and 8 can run in parallel after Task 3 completes (except Task 6 needs both 3 and 5).
