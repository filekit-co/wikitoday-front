import type { ArticleType } from "$lib/types";

export async function load({fetch}) {
    const response = await fetch('api/articles')
    const articles: ArticleType[] = await response.json();

    const imgRegex = /<img\s+[^>]*src="([^"]+)"[^>]*>/;
    articles.forEach((article) => {
      const match = (article.html as unknown as string).match(imgRegex);
      article.image = match ? match[1] : ""; // 이미지 URL을 해당 article 객체에 저장
    });

    // console.log(articles)

    // 최신 기사를 우선적으로 보여주기 위해 sort
    articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return {articles}
}
