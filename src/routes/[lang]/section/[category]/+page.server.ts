import { error } from "@sveltejs/kit";
import type { Article, GetApiType } from "$lib/types";
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async ({ fetch, params, url}) => {
    const type: GetApiType = "getArticlesByCategory"
    const lang = params.lang;
    const category = params.category;
    let skip = Number(url.searchParams.get('skip')) || 0;
    let limit = Number(url.searchParams.get('limit')) || 10;

    // if (skip === null && limit === null) {
    //     skip = 0
    //     limit = 10
    // }
    
    try {
        const response = await fetch(`/api/articles?type=${type}&lang=${lang}&category=${category}&skip=${skip}&limit=${limit}`);
        const { articles, totalArticleSize } = await response.json(); // 여기를 수정
        // console.log(articles);
        // console.log(totalArticleSize)

        return {
            articles,
            totalArticleSize,
        }
    } catch(e) {
        console.error(e);
        throw error(404, {
            message: `Could not load ${category} article.`
        })
    }
}