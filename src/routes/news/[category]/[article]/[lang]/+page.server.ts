import {error} from '@sveltejs/kit'

// 마크다운 파일에서 모든 컨텐츠 가져오기
// frontmatter, html
// https://github.com/pngwn/MDsveX/issues/294

export async function load({params}) {
	try {
		const articleTitle = params.article;
		const lang = params.lang;

		const module = await import(`../../../../../lib/data/${articleTitle}/${lang}.md`);

		const { metadata } = module;
		const { html } = module.default.render();

		const article = {
			html,
			...metadata,
		}

		return article;
	}
	catch(err) {
		throw error(404, `파일을 찾을 수 없습니다.`)
	}
}