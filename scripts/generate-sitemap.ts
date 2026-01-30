import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const SITE_URL = 'https://mcgeer.dev'

const staticRoutes = ['/', '/blogs', '/projects', '/resume']

function getPublishedBlogSlugs(): string[] {
	const contentDir = path.join(process.cwd(), 'content/blogs')
	const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.mdx'))

	return files
		.map((filename) => {
			const fileContent = fs.readFileSync(path.join(contentDir, filename), 'utf-8')
			const { data } = matter(fileContent)
			return {
				slug: filename.replace(/\.mdx$/, ''),
				published: data.published as boolean,
				date: data.date as string
			}
		})
		.filter((post) => post.published && new Date(post.date) <= new Date())
		.map((post) => post.slug)
}

function buildSitemap(): string {
	const blogSlugs = getPublishedBlogSlugs()
	const blogRoutes = blogSlugs.map((slug) => `/blogs/${slug}`)
	const allRoutes = [...staticRoutes, ...blogRoutes]

	const today = new Date().toISOString().split('T')[0]

	const urls = allRoutes
		.map(
			(route) => `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
  </url>`
		)
		.join('\n')

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}

const sitemap = buildSitemap()
const outPath = path.join(process.cwd(), 'public/sitemap.xml')
fs.writeFileSync(outPath, sitemap)
console.log(`Sitemap generated with ${sitemap.match(/<url>/g)?.length ?? 0} URLs → public/sitemap.xml`)
