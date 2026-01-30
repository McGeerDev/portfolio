import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PageTitle } from "@/components/page-title";
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
        <PageTitle title={metadata.title} />
        <article className="prose max-w-none">
          <MDXRemote source={content} />
        </article>
      </>
    );
  } catch {
    notFound();
  }
}
