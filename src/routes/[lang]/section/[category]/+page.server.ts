import type { ArticleType } from "$lib/types";
import {getExactCategory} from '$lib/types';

export async function load({fetch, params}) {
    const categoryParams = params.category;
    const category = getExactCategory(categoryParams);

    const lang = params.lang;

    const response = await fetch(`/api/articles?lang=${lang}`);
    const initArticles: ArticleType[] = await response.json();

    const articles = initArticles.filter(article => article.category === category);

    articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return {articles};
}