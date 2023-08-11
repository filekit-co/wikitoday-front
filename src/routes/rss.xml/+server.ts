import { PUBLIC_BASE_URL } from "$env/static/public";
import { generateRssData } from "$lib/articles";
import { LanguagePages } from "$lib/datas";

export const prerender = true;

const languages = LanguagePages.map(page => page.value);

async function getAllRssData() {
  const rssPromises = languages.map(generateRssData);
  const allRssData = await Promise.all(rssPromises);
  const rssItems: { title: string; description: string; url: string; date: string; thumbnail?: string }[] = allRssData.flat();
  return rssItems;
}

export async function GET() {
  const rssItems = await getAllRssData();

  // 최신 날짜 순으로 정렬
  rssItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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