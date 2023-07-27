import { basename } from "path";
import { json } from "@sveltejs/kit";
import { globalArticles } from "$lib/data";

export type Post = {
	slug: string;
	title: string;
	excerpt: string;
	isPublished: boolean;
	publishedOn: string;
	updatedOn: string;
  };

const modules = import.meta.globEager("$lib/data/*.md");

const posts: Post[] = Object.entries(modules).map(([filepath, module]) => {
  const slug = basename(filepath).replace('.md', '');
  const { metadata } = module;
  const { html } = module.default.render();
  return {
    slug,
    html,
    ...metadata,
  };
});


export async function GET() {
  const articles = await json(posts);
  globalArticles.set(articles);
  return articles
}
