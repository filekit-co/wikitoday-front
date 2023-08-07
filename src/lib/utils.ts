import { goto } from "$app/navigation";
import type { ArticleType } from "./types";
import {PUBLIC_BASE_URL} from '$env/static/public';

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
<<<<<<< HEAD
    //goto(`/news/${category}/${fileName}/${date}/${lang}`);
    goto(`/${lang}/news/${category}/${date}/${fileName}`);
}
=======
    goto(`/news/${category}/${fileName}/${date}/${lang}`);
}

export const canonicalUrl = (pathname: string) => pathname ? `${PUBLIC_BASE_URL}${pathname}`: `${PUBLIC_BASE_URL}`;
>>>>>>> 036a3a1d3a115b114fd8a4582bafa2ab7c5a465e
