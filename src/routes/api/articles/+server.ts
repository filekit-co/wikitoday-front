import { getArticlesByLang, getArticlesByCategory } from "$lib/articles";
import { json } from "@sveltejs/kit";

const FALLBACK_LANG = 'EN-US'

export async function GET(req) {
  let lang = req.url.searchParams.get('lang');
  let category = req.url.searchParams.get('category');


  if (lang === null) {
    lang = FALLBACK_LANG
  }

  // category 별로 기사 보여주기 위한 조건
  if (category !== null) {
    const articles = await getArticlesByCategory(lang, category);
    return json(articles);
  }

  const articles = await getArticlesByLang(lang)
  return json(articles);
}
