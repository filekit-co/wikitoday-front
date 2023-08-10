
import { generateSitemapRoutes } from "$lib/articles";

export const prerender = true


const languages = ['EN-US', 'KO', 'ZH', 'PT-BR', 'JA']; // 지원되는 언어 목록

async function getAllUrls() {
  const routesPromises = languages.map(generateSitemapRoutes);
  const allRoutes = await Promise.all(routesPromises);
  const urls: string[] = allRoutes.flat();
  return urls
}


export async function GET() {
  const urls: string[] = await getAllUrls()

  const headers = { 'Content-Type': 'application/xml' }
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
      .map((url) => {
        return `
          <url>
            <loc>${url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
          </url>
        `
      })
      .join('')}
    </urlset>`.trim()


	return new Response(sitemap, { headers })
}