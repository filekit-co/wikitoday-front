import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async ({ fetch, params}) => {
    const lang = params.lang;
    const response = await fetch(`api/articles?lang=${lang}`);
    const articles: Article[] = await response.json();

    // 최신 기사를 우선적으로 보여주기 위해 sort
    articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return { articles: articles.slice(0, numArticles) };
}
