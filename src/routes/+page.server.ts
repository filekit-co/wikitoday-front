import type { ArticleType } from "$lib/types";

export async function load({fetch}) {
    const response = await fetch('api/articles')
    const articles: ArticleType[] = await response.json();

    
    return {articles}
}