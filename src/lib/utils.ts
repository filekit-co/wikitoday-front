import { goto } from "$app/navigation";
import type { ArticleType } from "./types";

type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle })
	return formatter.format(new Date(date))
}

export type Post = {
	slug: string;
	title: string;
	excerpt: string;
	isPublished: boolean;
	publishedOn: string;
	updatedOn: string;
};

// 기사 click 했을 때,
// 해당 기사 detail로 이동하기 위한 함수
export function handleClick(article: ArticleType) {
    const date = article.date;
    const lang = article.language;
    const category = article.category;
    const fileName = article.slug;

    // console.log("article is:", fileName);
    // console.log(`/${lang}/news/${category}/${fileName}/${lang}`);

    // goto(`/${date}/news/${category}/${fileName}/${lang}`);
    goto(`/news/${category}/${fileName}/${date}/${lang}`);
}