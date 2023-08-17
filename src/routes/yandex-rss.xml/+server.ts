import { PUBLIC_BASE_URL } from "$env/static/public";
import { getRssItems } from "$lib/articles";
import { languageKeys } from "$lib/datas";

export const prerender = true;

export async function GET() {
  const rssItems = getRssItems(languageKeys);
  const headers = { 'Content-Type': 'application/rss+xml' };
  let rss = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:yandex="http://news.yandex.ru" xmlns:media="http://search.yahoo.com/mrss/" xmlns:turbo="http://turbo.yandex.ru">
      <channel>
        <title>wikitoday.io - Get trending news &amp; wiki</title>
        <link>${PUBLIC_BASE_URL}</link>
        <description>Explore trending topics with wikitoday</description>
        
        ${rssItems
          .map((item) => {
            return `
              <item turbo="true">
                <turbo:extendedHtml>true</turbo:extendedHtml>
                <title>${item.title}</title>
                <author>filekitco@gmail.com</author>
                <link>${item.url}</link>
                <description>${item.description}</description>
                <pubDate>${item.date}</pubDate>
                <category>${item.category}</category>
                ${item.thumbnail ? `<enclosure url="${item.thumbnail}" type="image/jpeg"/>` : ''}
                <turbo:content>
                  <![CDATA[
                        ${item.html}
                  ]]>
              </turbo:content>
              </item>
            `;
          })
          .join('')}
      </channel>
    </rss>`.trim();

  return new Response(rss, { headers });
}