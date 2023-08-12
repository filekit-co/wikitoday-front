// https://github.com/mattcroat/joy-of-code/blob/main/src/lib/site/posts.ts
import type { Article, RssData } from "$lib/types"
import { PUBLIC_BASE_URL } from "$env/static/public";
import { escapeXml } from "$lib/utils";
import _ from 'lodash';

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

const articleFileName = (filepath: string): string => _(filepath).split('/').nth(-2) || ''

const articleRouteSlug = (language: string, date: string, fileName: string) => `/${language}/news/${date}/${fileName}`

const getArticleFromModule = (language: string, [filepath, module]: [string, any]): Article | undefined => {
  const { metadata } = module;
  const { html } = module.default.render();
  const filename = articleFileName(filepath);
  if (!filename) return undefined;
  const slug = articleRouteSlug(language, metadata.date, filename);
  return {
    slug,
    html,
    ...metadata,
  };
};

const mapArticleFromModule = (language: string) =>  (entries: [string, any][]) => entries.map(_.partial(getArticleFromModule, language));

const filterUndefinedArticles = (articles: (Article | undefined)[]): Article[] => articles.filter((article): article is Article => article !== undefined);

const getArticles = (language: string) => _(Object.entries(getModules(language)))
    .thru(mapArticleFromModule(language))
    .thru(filterUndefinedArticles)
    .value() as Article[];

function extractInfoFromPath(filepath: string): { language: string; date: string; fileName: string } {
  const parts = filepath.split('/');
  const language = parts[parts.length - 1].split('.')[0];
  const date = parts[parts.length - 3];
  const fileName = parts[parts.length - 2];
  return { language, date, fileName };
}

const generateSitemapData = (language: string) => _(getModules(language))
      .keys()
      .map(filepath => {
        const { date, fileName } = extractInfoFromPath(filepath);
        const slug = articleRouteSlug(language, date, fileName);
        return { url: `${PUBLIC_BASE_URL}/${slug}`, date };
      })
      .value();

function generateRssData(language: string) {
  return _(getArticlesByLang(language))
    .map(article => ({
      title: escapeXml(article.title),
      url: escapeXml(`${PUBLIC_BASE_URL}/${article.slug}`),
      date: escapeXml(article.date),
      description: escapeXml(article.description),
      thumbnail: escapeXml(article.thumbnail),
    }))
    .value();
}

export function getArticlesByLang(language: string): Article[] {
  try {
    return _( getArticles(language))
      .orderBy(article => new Date(article.date), 'desc')
      .value();
  } catch (e) {
    console.error(e);
    throw new Error('Could not parse Markdown files');
  }
}

export function getRandomArticles(language: string, n: number): Article[] {
  try {
    return _(getArticlesByLang(language))
      .sampleSize(n)
      .value();
  } catch (e) {
    console.error(e);
    throw new Error('This category section articles do not exist');
  }
};

export function getArticlesByCategory(language: string, category: string): Article[] {
  try {
    return getArticlesByLang(language)
      .filter(article => article.category === category);
  } catch (e) {
    console.error(e);
    throw new Error('This category section articles do not exist');
  }
};

export function getSitemapUrls(languages: string[]) {
  try {
    return _.chain(languages)
    .map(generateSitemapData)
    .flatMap()
    .orderBy(article => new Date(article.date), 'desc')
    .value();
  } catch (e) {
    console.error(e);
    throw new Error('Could not generate sitemap routes');
  }
}

export function getRssItems(languages: string[]): RssData[] {
  try {
    return _(languages)
      .map(generateRssData)
      .flatMap()
      .orderBy(rssData => new Date(rssData.date), 'desc')
      .value();
  } catch (e) {
    console.error(e);
    throw new Error('Could not generate RSS data');
  }
}
