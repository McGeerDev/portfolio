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
				<p className="text-center tracking-widest text-muted-foreground">Loading...</p>
			)}

			{error && (
				<p className="text-center tracking-widest text-muted-foreground">
					Failed to load posts.
				</p>
			)}

			{!loading && !error && (
				<div className="mb-12 max-h-[27rem] space-y-4 overflow-y-auto pr-2">
					{posts.map((post) => (
						<Link
							key={post.slug}
							to={`/blog/${post.slug}`}
							className="block border border-border p-4 transition-colors hover:border-muted-foreground"
						>
							<span className="tracking-widest">{post.title.toUpperCase()}</span>
							<p className="mt-1 text-sm text-muted-foreground">{post.description}</p>
						</Link>
					))}
				</div>
			)}
		</>
	)
}
