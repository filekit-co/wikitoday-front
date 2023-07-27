import {error} from '@sveltejs/kit'

export async function load({params}) {
	try {
		const module = await import(`../../lib/data/${params.slug}.md`);
		const slug = params.slug;
		const { metadata } = module;
		const { html } = module.default.render();
		
		const article = {
			slug,
			html,
			...metadata,
		}

		return article;
	}
	catch(err) {
		throw error(404, `${params.slug} 파일을 찾을 수 없습니다.`)
	}
}