import type { ArticleType } from "$lib/types";

export async function load({fetch, params}) {
    const lang = params.lang;
    const renderLang = lang.toUpperCase();

    const response = await fetch(`/api/articles?lang=${renderLang}`);
    const articles: ArticleType[] = await response.json();

    articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return {articles};
}