import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PageTitle } from '@/components/page-title'
import type { PostMeta } from '@/types/blog'

export function BlogList() {
	const [posts, setPosts] = useState<PostMeta[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	useEffect(() => {
		fetch('/content/posts.json')
			.then((res) => {
				if (!res.ok) throw new Error('Failed to load posts')
				return res.json()
			})
			.then((data: PostMeta[]) => {
				setPosts(data)
				setLoading(false)
			})
			.catch(() => {
				setError(true)
				setLoading(false)
			})
	}, [])

	return (
		<>
			<PageTitle title="Blog" />

			{loading && (
				<p className="tracking-widest text-muted-foreground">Loading...</p>
			)}

			{error && (
				<p className="tracking-widest text-muted-foreground">Failed to load posts.</p>
			)}

			{!loading && !error && (
				<div className="mb-12 space-y-6">
					{posts.map((post, i) => (
						<div key={post.slug} className={i > 0 ? 'border-t border-border pt-6' : ''}>
							<Link
								to={`/blog/${post.slug}`}
								className="tracking-widest underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
							>
								<span className="uppercase">{post.title}</span>
							</Link>
							<p className="mt-1 text-sm text-muted-foreground">{post.description}</p>
						</div>
					))}
				</div>
			)}
		</>
	)
}
