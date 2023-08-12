import {error} from '@sveltejs/kit'
import type { Article, GetApiType, LanguageKey, UpdateHeaderProps } from '$lib/types';
import { createFaQJsonLD, createNewsArticleJsonLd, type Schema } from '$lib/utils';
import { NUM_TRENDING_ARTICLES } from '$lib/consts';
import type { PageServerLoad } from './$types';
import { articleRouteSlug } from '$lib/articles';



export const load: PageServerLoad = async ({ fetch, params }) => {
	try {
		// 1. prepare params
		const date = params.date;
		const title = encodeURIComponent(params.article);
		const language = params.lang as LanguageKey;
		const slug = articleRouteSlug(language, date, title)
		
		// 2. prepare an article
		const module = await import(`../../../../../lib/data/${date}/${title}/${language}.md`)
		const {metadata} = module
		const { html } = module.default.render()
		
		// 3. prepare ld+json
		let jsonLds: Schema[] = [
			createFaQJsonLD(html),
			createNewsArticleJsonLd(slug, metadata)
		]

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
			language: metadata.language as LanguageKey,
		}
		
		return {
			headerProps,
			jsonLds,
			articleHtml: html,
			randomArticles,
			candidLanguages: metadata.candidLanguages as LanguageKey[],
		}
	}
	catch(e) {
		console.error(e)
		throw error(404, `파일을 찾을 수 없습니다.`)
	}
}