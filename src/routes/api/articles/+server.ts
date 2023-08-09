import { getArticlesByLang } from "$lib/articles";
import { json } from "@sveltejs/kit";

const FALLBACK_LANG = 'EN-US'

export async function GET(req) {
  let lang = req.url.searchParams.get('lang');
  if (lang === null) {
    lang = FALLBACK_LANG
  }
  const articles = await getArticlesByLang(lang)
  return json(articles);
}
