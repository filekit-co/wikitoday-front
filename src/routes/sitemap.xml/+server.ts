
import { generateSitemapData } from "$lib/articles";
import { LanguagePages } from "$lib/datas";

export const prerender = true


const languages = LanguagePages.map(page => page.value);

async function getAllUrls() {
  const routesPromises = languages.map(generateSitemapData);
  const allRoutes = await Promise.all(routesPromises);
  const urls: { url: string; date: string }[] = allRoutes.flat();
  return urls;
}

export async function GET() {
  const urls: { url: string; date: string }[] = await getAllUrls();

  // 최신 날짜 순으로 정렬
  urls.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const headers = { 'Content-Type': 'application/xml' };
  let sitemap = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
    ${urls
      .map((urlObj) => {
        return `
          <url>
            <loc>${urlObj.url}</loc>
            <lastmod>${urlObj.date}</lastmod>
          </url>
        `;
      })
      .join('')}
    </urlset>`.trim();

  return new Response(sitemap, { headers });
}