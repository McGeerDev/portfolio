import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content/blogs");

function sanitize(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

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
        title: sanitize(data.title),
        description: sanitize(data.description),
        date: String(data.date ?? ""),
        published: Boolean(data.published),
        tech: Array.isArray(data.tech) ? data.tech.map(String) : [],
        slug: encodeURIComponent(filename.replace(/\.mdx$/, "")),
      };
    })
    .filter((post) => post.published && new Date(post.date) <= new Date())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  const resolved = path.resolve(filePath);
  if (!resolved.startsWith(contentDir)) {
    throw new Error("Invalid slug");
  }
  const fileContent = fs.readFileSync(resolved, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    metadata: {
      title: sanitize(data.title),
      description: sanitize(data.description),
      date: String(data.date ?? ""),
      published: Boolean(data.published),
      tech: Array.isArray(data.tech) ? data.tech.map(String) : [],
    },
    content,
  };
}
