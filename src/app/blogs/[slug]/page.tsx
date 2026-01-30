import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PageTitle } from "@/components/page-title";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";

export const dynamicParams = false;

export function generateStaticParams() {
  const posts = getAllPosts();
  if (posts.length === 0) {
    return [{ slug: "__placeholder" }];
  }
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  const { metadata, content } = post;

  return (
    <>
      <PageTitle title={metadata.title} />
      <article className="prose max-w-none">
        <MDXRemote source={content} />
      </article>
    </>
  );
}
