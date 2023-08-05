export interface HeaderProps {
  title: string;
  author: string;
  keywords: string;
  siteName: string;
  url: string;
  image: string;
  description: string;
}

export type UpdateHeaderProps = Partial<HeaderProps>

export type CategoryType =
  | 'Politics'
  | 'World/International'
  | 'Business/Economy'
  | 'Technology'
  | 'Science'
  | 'Health'
  | 'Entertainment'
  | 'Sports'
  | 'Environment/Nature'
  | 'Education'
  | 'Lifestyle'
  | 'Opinion/Editorial';

export interface DataType {
  articles: {
    title: string;
    category: string;
    description: string;
    date: string;
    image: string;
    keywords: string;
  }[];
}

export interface ArticleType {
  slug: string;
  title: string;
  description: string;
  category: CategoryType;
  date: string;
  author: string;
  language: string;
  html: HTMLAllCollection;
  image: string;
  keywords: string;
}

export const CategoryPages = [
  {
    key: 'Politics',
    value: 'Politics',
  },
  {
    key: 'World',
    value: 'World/International',
  },
  {
    key: 'Economy',
    value: 'Business/Economy',
  },
  {
    key: 'Technology',
    value: 'Technology',
  },
  {
    key: 'Science',
    value: 'Science',
  },
  {
    key: 'Health',
    value: 'Health',
  },
  {
    key: 'Entertainment',
    value: 'Entertainment',
  },
  {
    key: 'Sports',
    value: 'Sports',
  },
  {
    key: 'Nature',
    value: 'Environment/Nature',
  },
  {
    key: 'Education',
    value: 'Education',
  },
  {
    key: 'Lifestyle',
    value: 'Lifestyle',
  },
  {
    key: 'Opinion',
    value: 'Opinion/Editorial',
  },
];

export const LanguagePages = [
  {key: 'English', value: 'EN-US'},
  {key: 'Korean', value: 'KO'},
  {key: 'Spanish', value: 'ES'},
  {key: 'Russian', value: 'RU'},
  {key: 'Turkish', value: 'TU'}
]

export interface ImageType {
  title: string;
  src: string;
  description?: string;
  keywords?: string;
}