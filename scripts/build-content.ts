import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'content/blogs')
const outDir = path.join(process.cwd(), 'public/content')
const blogsOutDir = path.join(outDir, 'blogs')

interface PostMeta {
	title: string
	description: string
	date: string
	published: boolean
	tech: string[]
	slug: string
}

function sanitize(value: unknown): string {
	return String(value ?? '')
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;')
}

fs.mkdirSync(blogsOutDir, { recursive: true })

const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.mdx'))

const posts: PostMeta[] = files
	.map((filename) => {
		const filePath = path.join(contentDir, filename)
		const fileContent = fs.readFileSync(filePath, 'utf-8')
		const { data, content } = matter(fileContent)

		const slug = encodeURIComponent(filename.replace(/\.mdx$/, ''))

		return {
			meta: {
				title: sanitize(data.title),
				description: sanitize(data.description),
				date: String(data.date ?? ''),
				published: Boolean(data.published),
				tech: Array.isArray(data.tech) ? data.tech.map(String) : [],
				slug,
			},
			content,
		}
	})
	.filter((post) => post.meta.published && new Date(post.meta.date) <= new Date())
	.sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime())
	.map((post) => {
		fs.writeFileSync(path.join(blogsOutDir, `${post.meta.slug}.md`), post.content)
		return post.meta
	})

fs.writeFileSync(path.join(outDir, 'posts.json'), JSON.stringify(posts, null, '\t'))

console.log(`Content built: ${posts.length} published post(s) → public/content/`)
