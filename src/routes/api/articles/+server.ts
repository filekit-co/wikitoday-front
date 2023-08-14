import { getArticlesByLang, getArticlesByCategory, getRandomArticles } from "$lib/articles";
import type { GetApiType, LanguageKey } from "$lib/types";
import { returnErrorResponse } from "$lib/utils";
import { json } from "@sveltejs/kit";

const FALLBACK_LANG: LanguageKey = 'EN-US'
const FALLBACK_RANDOM_NUMBER = '0'


// $lib/types/GetQueryParams
export async function GET({ url }) {
  const params = url.searchParams;
  const type = params.get("type") as GetApiType;
  const lang = params.get("lang") as LanguageKey || FALLBACK_LANG;
  const category = params.get("category");
  const randomNumber = parseInt(params.get("randomNumber") || FALLBACK_RANDOM_NUMBER, 10);
  const skip = Number(params.get('skip'));
  const limit = Number(params.get('limit'));

  switch (type) {
    case "getArticlesByLang":
      const articlesByLang = getArticlesByLang(lang);
      return json(articlesByLang);

    case "getArticlesByCategory":
      if (!category) {
        return returnErrorResponse("Category is required for getArticlesByCategory", 400)
      }
      const { articles, totalArticleSize } = getArticlesByCategory(lang, category, skip, limit);
      return json({ articles, totalArticleSize });
      

    case "getRandomArticles":
      if (randomNumber == 0) {
        return returnErrorResponse("randomNumber is required for getRandomArticles", 400)
      }
      const randomArticles = getRandomArticles(lang, randomNumber);
      return json(randomArticles);

    default:
      return returnErrorResponse("Invalid request type", 400)
  }
}