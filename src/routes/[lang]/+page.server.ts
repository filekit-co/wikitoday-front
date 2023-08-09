import type { Article } from "$lib/types";

export async function load({fetch, params}) {
    const lang = params.lang;
    const renderLang = lang.toUpperCase();

<<<<<<< HEAD
    const response = await fetch(`/api/articles?lang=${renderLang}`);
    const articles: ArticleType[] = await response.json();
=======
    const response = await fetch(`/api/articles?lang=${lang}`);
    const articles: Article[] = await response.json();
    const imgRegex = /<img\s+[^>]*src="([^"]+)"[^>]*>/;

    articles.forEach((article) => {
        const match = (article.html as unknown as string).match(imgRegex);
        article.image = match ? match[1] : ""; // 이미지 URL을 해당 article 객체에 저장
    })

>>>>>>> b49d85e86eea5f2394236c4e7b9b18994e172b01

    articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return {articles};
}