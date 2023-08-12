import type { CategoryType, LanguageKey } from "$lib/types";

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

export const LanguagePages: { key: string, value: LanguageKey}[] = [
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

export const languageToHreflang: Record<LanguageKey, string> = {
  'EN-US': 'en-us',
  'JA': 'ja',
  'KO': 'ko',
  'ZH': 'zh',
  'PT-BR': 'pt-br',
  'PT-PT': 'pt-pt',
  'BG': 'bg',
  'CS': 'cs',
  'DA': 'da',
  'DE': 'de',
  'EL': 'el',
  'EN-GB': 'en-gb',
  'ES': 'es',
  'ET': 'et',
  'FI': 'fi',
  'FR': 'fr',
  'HU': 'hu',
  'ID': 'id',
  'IT': 'it',
  'LT': 'lt',
  'LV': 'lv',
  'NB': 'nb',
  'NL': 'nl',
  'PL': 'pl',
  'RO': 'ro',
  'RU': 'ru',
  'SK': 'sk',
  'SL': 'sl',
  'SV': 'sv',
  'TR': 'tr',
  'UK': 'uk',
};
export const languageKeys: LanguageKey[] = Object.keys(languageToHreflang) as LanguageKey[];