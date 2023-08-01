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
}

export const CategoryPages = [
  {
    key: 'Politics',
    value: 'Politics',
  },
  {
    key: 'World/International',
    value: 'World/International',
  },
  {
    key: 'Business/Economy',
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
    key: 'Environment/Nature',
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
    key: 'Opinion/Editorial',
    value: 'Opinion/Editorial',
  },
  {
    key: 'All',
    value: ''
  }
];

export const LanguagePages = [
  {key: 'English', value: 'en'},
  {key: 'Korean', value: 'ko'},
  {key: 'Spanish', value: 'es'},
  {key: 'Russian', value: 'ru'},
  {key: 'Turkish', value: 'tu'}
]