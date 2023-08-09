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

  export const CategoryPages: CategoryType[] = [
    'Politics'
    ,'International'
    ,'Economy'
    ,'Technology'
    ,'Science'
    ,'Health'
    ,'Entertainment'
    ,'Sports'
    ,'Nature'
    ,'Education'
    ,'Lifestyle'
    ,'Opinion'
    ,'Crime'
  ];  

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


export function getExactCategory(key: string) {
  const category = CategoryPages.find(item => item.key === key);
  return category ? category.value : 'key';
}

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
