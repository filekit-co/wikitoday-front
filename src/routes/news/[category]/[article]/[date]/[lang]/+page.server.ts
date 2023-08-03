import {error} from '@sveltejs/kit'
import type { UpdateHeaderProps } from '$lib/types';
import fs from 'fs/promises';
import path from 'path'

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
			description: `${metadata.description}`
		}

		const article = {
			html,
			headerProps,
			...metadata,
		}

		return article;
	}
	catch(err) {
		throw error(404, `파일을 찾을 수 없습니다.`)
	}
}