import {error} from '@sveltejs/kit'
import type { ArticleType, UpdateHeaderProps } from '$lib/types';


// 마크다운 파일에서 모든 컨텐츠 가져오기
// frontmatter, html
// https://github.com/pngwn/MDsveX/issues/294

export async function load({params}) {
	try {
		const date = params.date;
		const articleTitle = params.article;
		const lang = params.lang;

		const module = await import(`../../../../../../lib/data/${date}/${articleTitle}/${lang}.md`);

		const { metadata } = module;
		const { html } = module.default.render();

		const headerProps: UpdateHeaderProps = {
			title: `${metadata.title}`,
			description: `${metadata.description}`,
			image: `${metadata.thumbnail}`,
			keywords: `${metadata.keywords}`,
			date: date,
			language: `${metadata.language}`,
		}

		const article = {
			html,
			...metadata,
		}

		return {
			headerProps,
			article,
		}
	}
	catch(err) {
		throw error(404, `파일을 찾을 수 없습니다.`)
	}
}