export type Categories = 'Politics' | 'World/International'|'Business/Economy' | 'Technology' | 'Science' | 'Health' | 'Entertainment' | 'Sports' | 'Environment/Nature' | 'Education' | 'Lifestyle' | 'Opinion/Editorial'

export interface ArticleType {
    slug: string,
    title: string,
    description: string,
    category: Categories[],
    date: string,
    author: string,
    language: string,
    html: HTMLAllCollection;
}