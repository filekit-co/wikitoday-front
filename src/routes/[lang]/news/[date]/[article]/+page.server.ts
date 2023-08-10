import {error} from '@sveltejs/kit'
import type { UpdateHeaderProps } from '$lib/types';
import { convertHtmlToFaQJsonLD } from '$lib/utils';
import CategoryArticlePage from '@components/pages/CategoryArticlePage.svelte';

// https://github.com/pngwn/MDsveX/issues/294
export async function load({params}) {
	try {
		const date = params.date;
		const title = params.article;
		const language = params.lang;
		
		const module = await import(`../../../../../lib/data/${date}/${title}/${language}.md`)
		const {metadata} = module
		const { html } = module.default.render()
		
		const jsonLd = convertHtmlToFaQJsonLD(html)
		const headerProps: UpdateHeaderProps = {
			title: metadata.title,
			description: metadata.description,
			image: metadata.thumbnail,
			keywords: metadata.keywords,
			date: date,
			language: metadata.language,
		}

		return {
			headerProps,
			jsonLd,
			articleHtml: html
		}
	}
	catch(e) {
		console.error(e)
		throw error(404, `파일을 찾을 수 없습니다.`)
	}
}