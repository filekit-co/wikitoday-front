// https://github.com/mattcroat/joy-of-code/blob/main/src/lib/site/posts.ts
import fs from 'fs/promises';
import path from 'path';
import type { Article, CategoryType } from "$lib/types"


const ARTICLES_BASE_PATH = path.resolve('articles')

const getArticleRouteSlug = (language: string, category: CategoryType, date: string, fileName: string) => `${language}/news/${category}/${date}/${fileName}`
export const getArticleFileSlug = (date: string, title: string, language: string) => `${date}/${title}/${language}`


export async function getArticle(fileSlug: string): Promise<Article> {
  try {
    const module = await import(/* @vite-ignore */ `${ARTICLES_BASE_PATH}/${fileSlug}.md`);
    const {metadata} = module
    const { html } = module.default.render()

    return {
      fileSlug,
      html,
      ...metadata
    }
  } catch (e) {
    throw new Error(`Could not parse ${fileSlug}.md`)
  }
}

export async function getArticles(): Promise<Article[]> {
  try {
    const dates = await fs.readdir(ARTICLES_BASE_PATH);

    const promises = dates.map(async (date) => {
      const datePath = path.join(ARTICLES_BASE_PATH, date);
      const articleFolders = await fs.readdir(datePath);

      return Promise.all(articleFolders.map(async (articleFolder) => {
        const articlePath = path.join(datePath, articleFolder);
        const languages = await fs.readdir(articlePath);

        return Promise.all(languages.map(async (languageFile) => {
          const filePath = path.join(articlePath, languageFile);
          const module = await import(/* @vite-ignore */  `${filePath}`);
          const { metadata } = module;
          const { html } = module.default.render();
          const slug = getArticleRouteSlug(languageFile, metadata.category, metadata.date, articleFolder)
          return { html, ...metadata };
        }));
      }));
    });

    const nestedArticles = await Promise.all(promises);
    const articles: Article[] = nestedArticles.flat(3); // 3-level deep array

    return articles;
  } catch (e) {
    throw new Error('Could not parse Markdown files');
  }
}

export async function getArticlesByLang(language: string): Promise<Article[]> {
  try {
    const dates = await fs.readdir(ARTICLES_BASE_PATH);
    const promises = dates.map(async (date) => {
      const datePath = path.join(ARTICLES_BASE_PATH, date);
      const articleFolders = await fs.readdir(datePath);

      return Promise.all(articleFolders.map(async (articleFolder) => {
        const filePath = path.join(datePath, articleFolder, language);
        try {
          const module = await import(/* @vite-ignore */ `${filePath}.md`);
          const { metadata } = module;
          const { html } = module.default.render();
          const slug = getArticleRouteSlug(language, metadata.category, metadata.date, articleFolder)
          return { html, slug, ...metadata };
        } catch (e) {
          console.error(e)
          console.error(`Could not parse ${filePath}`);
          return null;
        }
      }));
    });

    const nestedArticles = await Promise.all(promises);
    const articles: Article[] = nestedArticles.flat(2).filter(Boolean) as Article[]; // 2-level deep array, null 제거
    return articles;
  } catch (e) {
    console.error(e);
    throw new Error('Could not parse Markdown files');
  }
}

export async function getArticlesByCategory(category: string) {
  
}

