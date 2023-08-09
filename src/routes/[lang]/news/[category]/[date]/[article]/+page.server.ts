import {error} from '@sveltejs/kit'
import type { UpdateHeaderProps } from '$lib/types';
import { convertHtmlToFaQJsonLD } from '$lib/utils';
import { getArticle, getArticleFileSlug } from '$lib/site/articles';


// https://github.com/pngwn/MDsveX/issues/294
export async function load({params}) {
	try {
		const date = params.date;
		const title = params.article;
		const lang = params.lang;


		const fileSlug = getArticleFileSlug(date, title, lang)
		const article = await getArticle(fileSlug)
		const jsonLd = convertHtmlToFaQJsonLD(article.html)
		const headerProps: UpdateHeaderProps = {
			title: article.title,
			description: article.description,
			image: article.thumbnail,
			keywords: article.keywords,
			date: date,
			language: article.language,
		}

		return {
			headerProps,
			jsonLd,
			article,
		}
	}
	catch(err) {
		throw error(404, `파일을 찾을 수 없습니다.`)
	}
}