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

// BG - Bulgarian
// CS - Czech
// DA - Danish
// DE - German
// EL - Greek
// EN - English (unspecified variant for backward compatibility; please select EN-GB or EN-US instead)
// EN-GB - English (British)
// EN-US - English (American)
// ES - Spanish
// ET - Estonian
// FI - Finnish
// FR - French
// HU - Hungarian
// ID - Indonesian
// IT - Italian
// JA - Japanese
// KO - Korean
// LT - Lithuanian
// LV - Latvian
// NB - Norwegian (Bokmål)
// NL - Dutch
// PL - Polish
// PT - Portuguese (unspecified variant for backward compatibility; please select PT-BR or PT-PT instead)
// PT-BR - Portuguese (Brazilian)
// PT-PT - Portuguese (all Portuguese varieties excluding Brazilian Portuguese)
// RO - Romanian
// RU - Russian
// SK - Slovak
// SL - Slovenian
// SV - Swedish
// TR - Turkish
// UK - Ukrainian
// ZH - Chinese (simplified)

export const LanguagePages = [
  {key: 'English', value: 'EN-US'},
  // {key: 'Bulgarian', value: 'BG'},
  // {key: 'Czech', value: 'CS'},
  // {key: 'Danish', value: 'DA'},
  // {key: 'German', value: 'DE'},
  // {key: 'Greek', value: 'EL'},
  // {key: 'Spanich', value: 'ES'},
  {key: "Chinese", value: 'ZH'},
  {key: 'Korean', value: 'KO'},
  
]

export interface ImageType {
  title: string;
  src: string;
  description?: string;
  keywords?: string;
}