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

function isValidDate(dateStr: string): boolean {
	const d = new Date(dateStr)
	return !isNaN(d.getTime())
}

if (!fs.existsSync(contentDir)) {
	console.warn(`Content directory not found: ${contentDir}`)
	fs.mkdirSync(blogsOutDir, { recursive: true })
	fs.writeFileSync(path.join(outDir, 'posts.json'), '[]')
	console.log('Content built: 0 published post(s) → public/content/')
	process.exit(0)
}

fs.mkdirSync(blogsOutDir, { recursive: true })

const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.mdx'))

const posts: PostMeta[] = files
	.map((filename) => {
		const filePath = path.join(contentDir, filename)
		const fileContent = fs.readFileSync(filePath, 'utf-8')
		const { data, content } = matter(fileContent)

		const slug = filename.replace(/\.mdx$/, '')
		const dateStr = String(data.date ?? '')

		if (dateStr && !isValidDate(dateStr)) {
			console.warn(`Skipping "${filename}": invalid date "${dateStr}"`)
			return null
		}

		return {
			meta: {
				title: String(data.title ?? '').trim(),
				description: String(data.description ?? '').trim(),
				date: dateStr,
				published: Boolean(data.published),
				tech: Array.isArray(data.tech) ? data.tech.map(String) : [],
				slug,
			},
			content,
		}
	})
	.filter(
		(post): post is NonNullable<typeof post> =>
			post !== null && post.meta.published && new Date(post.meta.date) <= new Date(),
	)
	.sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime())
	.map((post) => {
		fs.writeFileSync(path.join(blogsOutDir, `${post.meta.slug}.md`), post.content)
		return post.meta
	})

fs.writeFileSync(path.join(outDir, 'posts.json'), JSON.stringify(posts, null, '\t'))

console.log(`Content built: ${posts.length} published post(s) → public/content/`)
