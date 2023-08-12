import _ from 'lodash';
import { NUM_MAIN_ARTICLES, NUM_OPINIONS_ARTICLES, NUM_CARD_ARTICLES} from "$lib/consts";
import type { Article, GetApiType } from "$lib/types";
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async ({ fetch, params}) => {
    const type: GetApiType = "getArticlesByLang"
    const lang = params.lang;
    const response = await fetch(`api/articles?type=${type}&lang=${lang}`);
    const articles: Article[] = await response.json();

    const mainArticles = articles.slice(0, NUM_MAIN_ARTICLES);
    const opinionArticles = articles.slice(0, NUM_OPINIONS_ARTICLES);
    const cardArticles = _(articles).sampleSize(NUM_CARD_ARTICLES).value();
    return { mainArticles, opinionArticles, cardArticles };
}
