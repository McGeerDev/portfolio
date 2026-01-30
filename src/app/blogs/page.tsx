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
