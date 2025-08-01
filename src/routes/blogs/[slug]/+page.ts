import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const blogData = await import(`$content/blogs/${params.slug}.svx`);
		return {
			content: blogData.default,
			metadata: blogData.metadata
		};
	} catch {
		error(404, `Page not found: ${params.slug}`);
	}
};
