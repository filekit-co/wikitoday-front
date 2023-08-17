import { PUBLIC_BASE_URL } from "$env/static/public";
import { getRssItems } from "$lib/articles";
import { languageKeys } from "$lib/datas";
import { yyyyMMddToRFC822 } from "$lib/utils";

export const prerender = true;
const rssUrl = `${PUBLIC_BASE_URL}/dzen-rss.xml`

export async function GET() {
  const rssItems = getRssItems(languageKeys);
  const headers = { 'Content-Type': 'application/rss+xml' };
  let rss = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <atom:link href=${rssUrl} rel="self" type="application/rss+xml" />
      <channel>
        <title>wikitoday.io - Get trending news &amp; wiki</title>
        <link>${PUBLIC_BASE_URL}</link>
        <description>Explore trending topics with wikitoday</description>
        ${rssItems
          .map((item) => {
            return `
              <item>
                <title>${item.title}</title>
                <author>filekitco@gmail.com</author>
                <link>${item.url}</link>
                <description>${item.description}</description>
                <pubDate>${yyyyMMddToRFC822(item.date)}</pubDate>
                <guid isPermaLink="true">${item.url}</guid>
                <category>${item.category}</category>
                ${item.thumbnail ? `<image>${item.thumbnail}</image>` : ''}
                <content:encoded>
                <![CDATA[
                  <h2> ${item.title}</h2>
                  <h4>${item.category}</h4>          
                  <img src=${item.thumbnail} alt=>
                  <p>${item.description}</p>
                  ]]>
              </content:encoded>
              </item>
            `;
          })
          .join('')}
      </channel>
    </rss>`.trim();

  return new Response(rss, { headers });
}


