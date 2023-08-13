import { goto } from "$app/navigation";
import logo from "$lib/assets/wikitoday.png";
import {PUBLIC_BASE_URL} from '$env/static/public';
import * as cheerio from 'cheerio';
import type { NewsArticle, FAQPage, Question, WithContext, Thing, Article } from "schema-dts";

type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle })
	return formatter.format(new Date(date))
}

export async function handleClick(slug: string) {
  await goto(slug);
}

export const canonicalUrl = (pathname: string) => pathname ? `${PUBLIC_BASE_URL}${pathname}`: `${PUBLIC_BASE_URL}`;

export function createFaQJsonLD(html: string): WithContext<FAQPage> {
  const $ = cheerio.load(html);
  const questionsAndAnswers: Question[] = [];

  $('.faq > details.group').each(function () {
    const question = $(this).find('.summary h2 b').text();
    const answer = $(this).find('p').text();
    questionsAndAnswers.push({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    });
  });

  const jsonLD: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questionsAndAnswers,
  };
  return jsonLD;
}

// https://developers.google.com/search/docs/appearance/structured-data/article?hl=ko
export function createNewsArticleJsonLd(slug: string, metadata: any): WithContext<NewsArticle> {  
  const newsArticle: WithContext<NewsArticle> = {
    "@context": "https://schema.org",
    '@type': 'NewsArticle',
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${PUBLIC_BASE_URL}/${slug}`
    },
    "headline": metadata.title,
    "description": metadata.description,
    "image": [metadata.thumbnail],
    "author": {
      "@type": "Person",
      "name": metadata.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "wikitoday.io",
      "logo": {
        "@type": "ImageObject",
        "url": logo
      }
    },
    "datePublished": metadata.date,
    "dateModified": metadata.date,
    "articleSection": metadata.category,
    "keywords": metadata.keywords.split(', '),
    "inLanguage": metadata.language
  }
  return newsArticle
}

export type Schema = WithContext<Thing> | WithContext<Article>

export function serializeSchema(thing: Schema) {
  return `<script type="application/ld+json">${JSON.stringify(
    thing,
    null,
    2
  )}</script>`
}


export function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
    return c; // never reached, but TypeScript needs it
  });
}


export const returnErrorResponse = (msg: string, code: number) => new Response(JSON.stringify({ content: msg }), {
  headers: {
    'Content-Type': 'application/json'
  },
  status: code
});