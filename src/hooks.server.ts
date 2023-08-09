import type { Handle } from '@sveltejs/kit'

export const handle: Handle = (async ({ event, resolve }) => {
	const acceptLanguageHeader = event.request.headers.get('accept-language');
	const locale = acceptLanguageHeader
	  ? acceptLanguageHeader.split(',')[0]?.split(';')[0]?.toLowerCase()
	  : '';

	event.locals.locale = locale;

	const initialRoute = event?.url?.pathname.split('/').at(1)
	const language = 'EN-US'

	if (!initialRoute) {
		return new Response('Redirect', {status: 302, headers: { Location: `/${language}` }});
	}

	const response = resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', locale),
	})

	return response
})


