import {error} from '@sveltejs/kit'

// 마크다운 파일에서 모든 컨텐츠 가져오기
// frontmatter, html
// https://github.com/pngwn/MDsveX/issues/294
export async function load({params}) {
	try {
		const module = await import(`../../lib/data/${params.slug}.md`);
		const slug = params.slug;
		const { metadata } = module;
		const { html } = module.default.render();
		console.log(html)
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