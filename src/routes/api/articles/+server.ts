import { getArticlesByLang, getArticlesByCategory } from "$lib/articles";
import { json } from "@sveltejs/kit";

const FALLBACK_LANG = 'EN-US'

export async function GET(req) {
  let lang = req.url.searchParams.get('lang');
  let category = req.url.searchParams.get('category');

  if (lang === null) {
    lang = FALLBACK_LANG
  }

  if (category !== null) {
    try {
      const articles = getArticlesByCategory(lang, category);
      return json(articles);
    } catch(e) {
      console.error(e)
    }
  }

  const articles = getArticlesByLang(lang)
  return json(articles);
}
