import { error } from "@sveltejs/kit";
import type { Article } from "$lib/types";

export async function load({fetch, params}) {
    const lang = params.lang;
    const category = params.category;
    try {
        const response = await fetch(`/api/articles?lang=${lang}&category=${category}`);

        const articles: Article[] = await response.json();
        articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        return {articles}
    } catch(e) {
        console.error(e);
        throw error(404, {
            message: `Could not load ${category} article.`
        })
    }
}