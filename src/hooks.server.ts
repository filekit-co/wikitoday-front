import type { LanguageKey } from '$lib/types';
import type { Handle } from '@sveltejs/kit'

const excludeI18nRoute = ['rss.xml', 'sitemap.xml']

export const handle: Handle = (async ({ event, resolve }) => {
	const tlr = event?.url?.pathname.split('/').at(1)
	if (tlr && excludeI18nRoute.includes(tlr)) {
		const response = await resolve(event);
		return response;		
	}

	const acceptLanguageHeader = event.request.headers.get('accept-language');
	const locale = acceptLanguageHeader
	  ? acceptLanguageHeader.split(',')[0]?.split(';')[0]?.toLowerCase()
	  : '';

	event.locals.locale = locale;

	const language: LanguageKey = 'EN-US'
	//const language =  locale ? locale : 'EN-US' 

	if (!tlr) {
		return new Response('Redirect', {status: 302, headers: { Location: `/${language}` }});
	}

	const response = resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', locale),
	})

	return response
})

export const handleError = async({error}) => {
	return {
		message: 'NO NEWS articles exist'
	}
}