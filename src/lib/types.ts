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
  {key: 'English (US)', value: 'EN-US'},
  {key: '日本語', value: 'JA'},
  {key: '한국어', value: 'KO'},
  {key: '中文', value: 'ZH'},
  {key: 'português (Brasil)', value: 'PT-BR'},
  {key: 'português (Portugal)', value: 'PT-PT'},
  {key: 'български', value: 'BG'},
  {key: 'čeština', value: 'CS'},
  {key: 'dansk', value: 'DA'},
  {key: 'Deutsch', value: 'DE'},
  {key: 'ελληνικά', value: 'EL'},
  {key: 'English (UK)', value: 'EN-GB'},
  {key: 'español', value: 'ES'},
  {key: 'eesti', value: 'ET'},
  {key: 'suomi', value: 'FI'},
  {key: 'français', value: 'FR'},
  {key: 'magyar', value: 'HU'},
  {key: 'Bahasa Indonesia', value: 'ID'},
  {key: 'italiano', value: 'IT'},
  {key: 'lietuvių', value: 'LT'},
  {key: 'latviešu', value: 'LV'},
  {key: 'norsk bokmål', value: 'NB'},
  {key: 'Nederlands', value: 'NL'},
  {key: 'polski', value: 'PL'},
  {key: 'română', value: 'RO'},
  {key: 'русский', value: 'RU'},
  {key: 'slovenčina', value: 'SK'},
  {key: 'slovenščina', value: 'SL'},
  {key: 'svenska', value: 'SV'},
  {key: 'Türkçe', value: 'TR'},
  {key: 'українська', value: 'UK'},
  
];

export type ImageType = {
  title: string;
  src: string;
};