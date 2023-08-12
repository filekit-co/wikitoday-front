import { error } from "@sveltejs/kit";
import type { Article, GetApiType } from "$lib/types";
import type { PageServerLoad } from './$types';



export const load: PageServerLoad = async ({ fetch, params}) => {
    const type: GetApiType = "getArticlesByCategory"
    const lang = params.lang;
    const category = params.category;
    try {
        const response = await fetch(`/api/articles?type=${type}&lang=${lang}&category=${category}`);
        const articles: Article[] = await response.json();
        return {articles}
    } catch(e) {
        console.error(e);
        throw error(404, {
            message: `Could not load ${category} article.`
        })
    }
}