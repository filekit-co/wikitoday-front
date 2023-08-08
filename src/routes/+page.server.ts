import type { ArticleType } from "$lib/types";

export async function load({fetch}) {
    const response = await fetch('api/articles')
    const articles: ArticleType[] = await response.json();

    // 최신 기사를 우선적으로 보여주기 위해 sort
    // console.log(articles)
    articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return {articles}
}
