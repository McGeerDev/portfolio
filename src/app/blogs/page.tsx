import Link from "next/link";
import { PageTitle } from "@/components/page-title";
import { getAllPosts } from "@/lib/mdx";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <PageTitle title="Blog" />

      <div className="mb-12 max-h-[27rem] space-y-4 overflow-y-auto pr-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="block rounded border border-gray-300 p-4 hover:border-gray-400"
          >
            <span className="tracking-widest">{post.title.toUpperCase()}</span>
            <p className="mt-1 text-sm text-gray-600">{post.description}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
