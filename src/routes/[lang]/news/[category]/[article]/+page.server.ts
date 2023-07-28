import {error} from '@sveltejs/kit'

// 마크다운 파일에서 모든 컨텐츠 가져오기
// frontmatter, html
// https://github.com/pngwn/MDsveX/issues/294

export async function load({params}) {
	try {
        const lang = params.lang;
		// en
        const fileName = params.article;
		// console.log(fileName)\
		// ex: 파일 이름 == news10

        const module = await import(`../../../../../lib/data/${fileName}/${lang}/${fileName}.${lang}.md`)
		// lib / data / news10 / en / news10.en.md
		
		const slug = params.lang;
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
		throw error(404, `파일을 찾을 수 없습니다.`)
	}
}