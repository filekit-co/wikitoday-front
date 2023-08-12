import {error} from '@sveltejs/kit'
import type { Article, GetApiType, UpdateHeaderProps } from '$lib/types';
import { convertHtmlToFaQJsonLD } from '$lib/utils';
import { NUM_TRENDING_ARTICLES } from '$lib/consts';
import type { PageServerLoad } from './$types';



export const load: PageServerLoad = async ({ fetch, params }) => {
	try {
		// 1. prepare params
		const date = params.date;
		const title = encodeURIComponent(params.article);
		const language = params.lang;
		
		// 2. prepare an article
		const module = await import(`../../../../../lib/data/${date}/${title}/${language}.md`)
		const {metadata} = module
		const { html } = module.default.render()
		
		// 3. prepare ld+json
		const jsonLd = convertHtmlToFaQJsonLD(html)

		// 4. prepare random articles for trending news 
		const type: GetApiType = "getRandomArticles"
		const response = await fetch(`/api/articles?type=${type}&lang=${language}&randomNumber=${NUM_TRENDING_ARTICLES}`);
		const randomArticles: Article[] = await response.json();

		// 5. prepare seo headers
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
			articleHtml: html,
			randomArticles,
			candidLanguages: metadata.candidLanguages,
		}
	}
	catch(e) {
		console.error(e)
		throw error(404, `파일을 찾을 수 없습니다.`)
	}
}