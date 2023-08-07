import { json } from "@sveltejs/kit";

export type Post = {
	slug: string;
	title: string;
	excerpt: string;
	isPublished: boolean;
	publishedOn: string;
	updatedOn: string;
  };

// 모든 md 파일 가져오기
// const modules = import.meta.glob("$lib/data/*.md", {eager: true});

// 변해야 되는 값들
// const modules = import.meta.glob(`$lib/data/*/${lang}/*.${lang}.md`, {eager: true})

// lib / data / 모든 폴더 / ${lang} / ${lang}.md 인 모든 파일
// const modules = import.meta.glob(`$lib/data/*/en/*.en.md`, {eager: true})


export async function GET(req) {
  // console.log(lang);
  // console.log(lang.url.searchParams.get('lang'));

  // const language = lang.url.searchParams.get('lang');

  //console.log(language)

  const lang = req.url.searchParams.get('lang');

  let modules;
  if (lang === null || lang === 'EN-US') {
    modules = import.meta.glob("$lib/data/*/*/EN-US.md", {eager: true});
  }

  else {
    switch(lang) {
      case 'KO':
        modules = import.meta.glob(`$lib/data/*/*/KO.md`, {eager: true});
        break;

      case 'ZH':
        modules = import.meta.glob(`$lib/data/*/*/ZH.md`, {eager: true});
        break;
    }
  }

  const posts: Post[] = Object.entries(modules).map(([filepath, module]) => {
    const parts = filepath.split('/')
    const slug = parts[parts.length - 1]
  
    // console.log('기사 제목:', slug)
  
    const { metadata } = module;
    const { html } = module.default.render();

    return {
      slug,
      html,
      ...metadata,
    };
  });

  const articles = await json(posts);

  return articles
}
