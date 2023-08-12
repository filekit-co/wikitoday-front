import { PUBLIC_BASE_URL } from "$env/static/public";
import { getRssItems } from "$lib/articles";
import { languageKeys } from "$lib/datas";

export const prerender = true;

export async function GET() {
  const rssItems = getRssItems(languageKeys);
  const headers = { 'Content-Type': 'application/rss+xml' };
  let rss = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>wikitoday.io - Get trending news &amp; wiki</title>
        <link>${PUBLIC_BASE_URL}</link>
        <description>Explore trending topics with wikitoday</description>
        ${rssItems
          .map((item) => {
            return `
              <item>
                <title>${item.title}</title>
                <link>${item.url}</link>
                <description>${item.description}</description>
                <pubDate>${item.date}</pubDate>
                ${item.thumbnail ? `<image>${item.thumbnail}</image>` : ''}
              </item>
            `;
          })
          .join('')}
      </channel>
    </rss>`.trim();

  return new Response(rss, { headers });
}