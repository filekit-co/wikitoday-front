import { json } from "@sveltejs/kit";
import type {NewsType} from '$lib/types'

async function getNews() {
    let news: NewsType[] = [];

    const paths = import.meta.glob('$lib/data/*.md', {eager: true})

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<NewsType, 'slug'>
			const post = { ...metadata, slug } satisfies NewsType
			news.push(post)
		}
	}

    news = news.sort((first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime()
	)

    return news;
}

export async function GET() {
    const news = await getNews();
    return json(news)
}