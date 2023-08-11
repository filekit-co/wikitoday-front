export interface HeaderProps {
  title: string;
  author: string;
  keywords: string;
  siteName: string;
  url: string;
  image: string;
  description: string;
  date: string;
  language: string;
}

export type UpdateHeaderProps = Partial<HeaderProps>
export type CategoryType =
  | 'Politics'
  | 'International'
  | 'Economy'
  | 'Technology'
  | 'Science'
  | 'Health'
  | 'Entertainment'
  | 'Sports'
  | 'Nature'
  | 'Education'
  | 'Lifestyle'
  | 'Opinion'
  | 'Crime';


export interface ArticleMetadata {
  articles: {
    title: string;
    category: CategoryType;
    description: string;
    date: string;
    thumbnail: string;
    keywords: string;
  }[];
}

export interface Article {
  slug: string;
  html: string;
  title: string;
  description: string;
  category: CategoryType;
  keywords: string;
  date: string;
  author: string;
  language: string;
  thumbnail: string;
}

export type CaroselType = {
  title: string;
  src: string;
  slug: string;
};

export type LanguageKey = 'EN-US' | 'JA' | 'KO' | 'ZH' | 'PT-BR' | 'PT-PT' | 'BG' | 'CS' | 'DA' | 'DE' | 'EL' | 'EN-GB' | 'ES' | 'ET' | 'FI' | 'FR' | 'HU' | 'ID' | 'IT' | 'LT' | 'LV' | 'NB' | 'NL' | 'PL' | 'RO' | 'RU' | 'SK' | 'SL' | 'SV' | 'TR' | 'UK';
