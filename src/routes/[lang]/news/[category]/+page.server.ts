import type { ArticleType } from "$lib/types";

export async function load({fetch, params}) {
    const category = params.category;
    const lang = params.lang;

    const response = await fetch(`/api/articles?lang=${lang}`);
    const initArticles: ArticleType[] = await response.json();
    const imgRegex = /<img\s+[^>]*src="([^"]+)"[^>]*>/;

    initArticles.forEach((article) => {
        const match = (article.html as unknown as string).match(imgRegex);
        article.image = match ? match[1] : ""; // 이미지 URL을 해당 article 객체에 저장
    })

    const articles = initArticles.filter(article => article.category === category);
    // console.log(articles)

    articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return {articles};
}