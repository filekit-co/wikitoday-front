import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';
import * as path from 'path'
import { mdsvex } from 'mdsvex'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md',],
	layout: {},
	smartypants: true,
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],

	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			'@src': path.resolve('/src'),
			'@components': path.resolve('src/components'),
			'@atoms': path.resolve('src/atoms'),
			'@molecules': path.resolve('src/molecules'),
			'@organisms': path.resolve('src/organisms'),
			'@pages': path.resolve('src/pages'),
			'@templates': path.resolve('src/templates'),
			'@store': path.resolve('src/lib/store'),
		}
	}
};

export default config;
