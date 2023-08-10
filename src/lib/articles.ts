// https://github.com/mattcroat/joy-of-code/blob/main/src/lib/site/posts.ts
import type { Article, CategoryType } from "$lib/types"


const getArticleRouteSlug = (language: string, category: CategoryType, date: string, fileName: string) => `${language}/news/${category}/${date}/${fileName}`



function getModules(language: string) {
  switch(language) {
    case 'KO':
      return import.meta.glob('@data/*/*/KO.md', {eager: true})
    case 'ZH':
      return import.meta.glob('@data/*/*/ZH.md', {eager: true})
    case 'PT-BR':
      return import.meta.glob('@data/*/*/PT-BR.md', {eager: true})
    default:
      return import.meta.glob('@data/*/*/EN-US.md', {eager: true})
  }
}

function getArticleFileName(filepath: string): string {
  // ['', 'src', 'lib', 'markdowns', '2023-08-09', 'Nissan-Announces-New', 'EN-US.md']
  const parts = filepath.split('/');
  return parts[parts.length - 2];
}


export async function getArticlesByLang(language: string): Promise<Article[]> {
  
  try {
    const modules = getModules(language);
    const articles: Article[] = Object.entries(modules).map(([filepath, module]) => {
      const { metadata } = module;
      const { html } = module.default.render();
      const articleFileName = getArticleFileName(filepath)
      const slug = getArticleRouteSlug(language, metadata.category, metadata.date, articleFileName)
      return {
        slug,
        html,
        ...metadata,
      };
    });
    return articles
  } catch (e) {
    console.error(e);
    throw new Error('Could not parse Markdown files');
  }
}

export async function getArticlesByCategory(category: string) {

}
