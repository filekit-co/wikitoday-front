import {error} from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const news = await import(`../../lib/data/${params.slug}.md`)

		return {
			content: news.default,
			meta: news.metadata
		}
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`)
	}
}