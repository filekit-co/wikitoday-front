// https://github.com/mattcroat/joy-of-code/blob/main/src/lib/site/posts.ts
import type { Article, CategoryType } from "$lib/types"
import { PUBLIC_BASE_URL } from "$env/static/public";

const getArticleRouteSlug = (language: string, date: string, fileName: string) => `${language}/news/${date}/${fileName}`

function getModules(language: string) {
  switch (language) {
    case 'EN-US':
      return import.meta.glob('@data/*/*/EN-US.md', {eager: true});
    case 'JA':
      return import.meta.glob('@data/*/*/JA.md', {eager: true});
    case 'KO':
      return import.meta.glob('@data/*/*/KO.md', {eager: true});
    case 'ZH':
      return import.meta.glob('@data/*/*/ZH.md', {eager: true});
    case 'PT-BR':
      return import.meta.glob('@data/*/*/PT-BR.md', {eager: true});
    case 'PT-PT':
      return import.meta.glob('@data/*/*/PT-PT.md', {eager: true});
    case 'BG':
      return import.meta.glob('@data/*/*/BG.md', {eager: true});
    case 'CS':
      return import.meta.glob('@data/*/*/CS.md', {eager: true});
    case 'DA':
      return import.meta.glob('@data/*/*/DA.md', {eager: true});
    case 'DE':
      return import.meta.glob('@data/*/*/DE.md', {eager: true});
    case 'EL':
      return import.meta.glob('@data/*/*/EL.md', {eager: true});
    case 'EN-GB':
      return import.meta.glob('@data/*/*/EN-GB.md', {eager: true});
    case 'ES':
      return import.meta.glob('@data/*/*/ES.md', {eager: true});
    case 'ET':
      return import.meta.glob('@data/*/*/ET.md', {eager: true});
    case 'FI':
      return import.meta.glob('@data/*/*/FI.md', {eager: true});
    case 'FR':
      return import.meta.glob('@data/*/*/FR.md', {eager: true});
    case 'HU':
      return import.meta.glob('@data/*/*/HU.md', {eager: true});
    case 'ID':
      return import.meta.glob('@data/*/*/ID.md', {eager: true});
    case 'IT':
      return import.meta.glob('@data/*/*/IT.md', {eager: true});
    case 'LT':
      return import.meta.glob('@data/*/*/LT.md', {eager: true});
    case 'LV':
      return import.meta.glob('@data/*/*/LV.md', {eager: true});
    case 'NB':
      return import.meta.glob('@data/*/*/NB.md', {eager: true});
    case 'NL':
      return import.meta.glob('@data/*/*/NL.md', {eager: true});
    case 'PL':
      return import.meta.glob('@data/*/*/PL.md', {eager: true});
    case 'RO':
      return import.meta.glob('@data/*/*/RO.md', {eager: true});
    case 'RU':
      return import.meta.glob('@data/*/*/RU.md', {eager: true});
    case 'SK':
      return import.meta.glob('@data/*/*/SK.md', {eager: true});
    case 'SL':
      return import.meta.glob('@data/*/*/SL.md', {eager: true});
    case 'SV':
      return import.meta.glob('@data/*/*/SV.md', {eager: true});
    case 'TR':
      return import.meta.glob('@data/*/*/TR.md', {eager: true});
    case 'UK':
      return import.meta.glob('@data/*/*/UK.md', {eager: true});
    default:
      return import.meta.glob('@data/*/*/EN-US.md', {eager: true}); // Default to 'EN-US'
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
      const slug = getArticleRouteSlug(language, metadata.date, articleFileName)
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

export async function getArticlesByCategory(language: string, category: string) {
  try {
    const modules = getModules(language);
    const initArticles: Article[] = Object.entries(modules).map(([filepath, module]) => {
      const { metadata } = module;
      const { html } = module.default.render();
      const articleFileName = getArticleFileName(filepath)
      
      return {
       
        html,
        ...metadata,
      };
    });

    const articles = initArticles.filter(article => article.category === category && article.language === language);
    return articles;

  } catch(error) {
    console.error(error);
    throw new Error('This category section articles do not exist');
  }
}


export async function generateSitemapRoutes(language: string): Promise<string[]> {
  try {
    const modules = getModules(language);
    const routes: string[] = Object.entries(modules).map(([filepath, module]) => {
      const { metadata } = module;
      const articleFileName = getArticleFileName(filepath);
      const slug = getArticleRouteSlug(language, metadata.date, articleFileName);
      return `${PUBLIC_BASE_URL}/${slug}`
    });
    return routes;
  } catch (e) {
    console.error(e);
    throw new Error('Could not generate sitemap routes');
  }
}