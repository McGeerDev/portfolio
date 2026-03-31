import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PageTitle } from '@/components/page-title'

interface PostMeta {
	title: string
	description: string
	date: string
	tech: string[]
	slug: string
}

export function BlogList() {
	const [posts, setPosts] = useState<PostMeta[]>([])

	useEffect(() => {
		fetch('/content/posts.json')
			.then((res) => res.json())
			.then((data: PostMeta[]) => setPosts(data))
			.catch(() => setPosts([]))
	}, [])

	return (
		<>
			<PageTitle title="Blog" />

			<div className="mb-12 max-h-[27rem] space-y-4 overflow-y-auto pr-2">
				{posts.map((post) => (
					<Link
						key={post.slug}
						to={`/blogs/${post.slug}`}
						className="block border border-border p-4 transition-colors hover:border-muted-foreground"
					>
						<span className="tracking-widest">{post.title.toUpperCase()}</span>
						<p className="mt-1 text-sm text-muted-foreground">{post.description}</p>
					</Link>
				))}
			</div>
		</>
	)
}
