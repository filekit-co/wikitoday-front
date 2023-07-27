import { basename } from "path";
import { json } from "@sveltejs/kit";

export type Post = {
	slug: string;
	title: string;
	excerpt: string;
	isPublished: boolean;
	publishedOn: string;
	updatedOn: string;
  };

const modules = import.meta.glob("$lib/data/*.md", {eager: true});

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
  return articles
}
