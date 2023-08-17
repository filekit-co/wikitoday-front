import { languageToHreflang } from '$lib/datas';
import { detectLanguageOrFallback } from '$lib/detectors';
import type { LanguageKey } from '$lib/types';
import type { Handle } from '@sveltejs/kit'

const excludeI18nRoute = ['rss.xml', 'sitemap.xml', 'yandex-rss.xml']

export const handle: Handle = (async ({ event, resolve }) => {
	const tlr = event?.url?.pathname.split('/').at(1)
	
	if (tlr && excludeI18nRoute.includes(tlr)) {
		const response = await resolve(event);
		return response;		
	}

	const detectedLanguage: LanguageKey = await detectLanguageOrFallback(
		{ pathname: event.url.pathname },
		{ get: (key) => event.request.headers.get(key) },
		'EN-US'  // This is the default fallback language
	);
	
	// event.locals.locale = detectedLanguage;
	
  // If no top level route detected, then redirect
  if (!tlr) {
		return new Response(null, {
			status: 302,
			headers: { Location: `/${detectedLanguage}` },
		});
	}
	const response = await resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%lang%', languageToHreflang[detectedLanguage]),
	});

	return response;
})

export const handleError = async ({ error }) => 
	{
			message: 'NO NEWS articles exist'
	}