import { getArticlesByCategory } from "$lib/articles.js";
import type { Article } from "schema-dts";

export async function load({fetch, params}) {
    try {
        const lang = params.lang;
        const category = params.category;
        const response = await fetch(`/api/articles?lang=${lang}&category=${category}`);

        const articles: Article[] = await response.json();
        articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        return {articles}
    } catch(e) {
        console.error(e);
        throw new Error('해당 카테고리 파일 찾을 수 없음')
    }

    // const response = getArticlesByCategory()
    // const categoryParams = params.category;
    // const category = getExactCategory(categoryParams);

    // const lang = params.lang;

    // const response = await fetch(`/api/articles?lang=${lang}`);
    // const initArticles: ArticleType[] = await response.json();

    // const articles = initArticles.filter(article => article.category === category);

    // articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // return {articles};

}