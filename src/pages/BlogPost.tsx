import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { PageTitle } from '@/components/page-title'
import type { PostMeta } from '@/types/blog'

export function BlogPost() {
	const { slug } = useParams<{ slug: string }>()
	const navigate = useNavigate()
	const [content, setContent] = useState<string>('')
	const [meta, setMeta] = useState<PostMeta | null>(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (!slug) return

		Promise.all([
			fetch('/content/posts.json').then((r) => r.json()),
			fetch(`/content/blogs/${slug}.md`).then((r) => {
				if (!r.ok) throw new Error('Not found')
				return r.text()
			}),
		])
			.then(([posts, md]: [PostMeta[], string]) => {
				const post = posts.find((p) => p.slug === decodeURIComponent(slug))
				if (post) setMeta(post)
				setContent(md)
				setLoading(false)
			})
			.catch(() => {
				navigate('/not-found', { replace: true })
			})
	}, [slug, navigate])

	if (loading) {
		return (
			<p className="py-10 text-center tracking-widest text-muted-foreground">Loading...</p>
		)
	}

	return (
		<>
			{meta && <PageTitle title={meta.title} />}
			<article className="prose max-w-none">
				<Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
			</article>
		</>
	)
}
