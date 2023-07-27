import {error} from '@sveltejs/kit'
import { globalArticles } from '$lib/data.js'

export async function load({params}) {
	try {
		globalArticles.subscribe(value => {
			console.log(value)
		})
	}
	catch(err) {
		throw error(404, `${params.slug} 파일을 찾을 수 없습니다.`)
	}
}