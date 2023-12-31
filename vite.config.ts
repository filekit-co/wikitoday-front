import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path'

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@src': path.resolve('/src'),
			'@atoms': path.resolve('src/atoms'),
			'@molecules': path.resolve('src/molecules'),
			'@components': path.resolve('src/components'),
			'@organisms': path.resolve('src/organisms'),
			'@pages': path.resolve('src/pages'),
			'@templates': path.resolve('src/templates'),
			'@store': path.resolve('src/lib/store'),
			'@lib': path.resolve('src/lib'),
			'@data': path.resolve('src/lib/data'),
		}
	}	
});
