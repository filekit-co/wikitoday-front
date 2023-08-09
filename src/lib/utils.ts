import { goto } from "$app/navigation";
import {PUBLIC_BASE_URL} from '$env/static/public';
import * as cheerio from 'cheerio';
import type { FAQPage, Question, WithContext, Thing } from "schema-dts";

type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle })
	return formatter.format(new Date(date))
}

export function handleClick(slug: string) {
    goto(slug);
}

export const canonicalUrl = (pathname: string) => pathname ? `${PUBLIC_BASE_URL}${pathname}`: `${PUBLIC_BASE_URL}`;

export function convertHtmlToFaQJsonLD(html: string): WithContext<FAQPage> {
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

export type Schema = Thing | WithContext<Thing>

export function serializeSchema(thing: Schema) {
  return `<script type="application/ld+json">${JSON.stringify(
    thing,
    null,
    2
  )}</script>`
}
