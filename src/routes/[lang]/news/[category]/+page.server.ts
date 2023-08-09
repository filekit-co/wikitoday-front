import type { Article } from "$lib/types";

export async function load({fetch, params}) {
    const category = params.category;
    const lang = params.lang;

    const response = await fetch(`/api/articles?lang=${lang}`);
    const initArticles: Article[] = await response.json();
    const imgRegex = /<img\s+[^>]*src="([^"]+)"[^>]*>/;

    const articles = initArticles.filter(article => article.category === category);
    // console.log(articles)

    articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return {articles};
}