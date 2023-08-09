<<<<<<< HEAD
import type { ArticleType } from "$lib/types";
import {getExactCategory} from '$lib/types';
=======
import type { Article } from "$lib/types";
>>>>>>> b49d85e86eea5f2394236c4e7b9b18994e172b01

export async function load({fetch, params}) {
    const categoryParams = params.category;
    const category = getExactCategory(categoryParams);

    const lang = params.lang;

    const response = await fetch(`/api/articles?lang=${lang}`);
<<<<<<< HEAD
    const initArticles: ArticleType[] = await response.json();
=======
    const initArticles: Article[] = await response.json();
    const imgRegex = /<img\s+[^>]*src="([^"]+)"[^>]*>/;
>>>>>>> b49d85e86eea5f2394236c4e7b9b18994e172b01

    const articles = initArticles.filter(article => article.category === category);

    articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return {articles};
}