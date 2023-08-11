<script lang="ts">
  import { page } from "$app/stores";
  import type { HeaderProps, UpdateHeaderProps } from "$lib/types";
  import { canonicalUrl, serializeSchema } from "$lib/utils";
  import wikitoday from "$lib/assets/wikitoday.png";

  const defaultHeaderProps: HeaderProps = {
    title: "wikitoday - Get Trending News & Wiki Articles Worldwide",
    author: "wikitoday.io",
    keywords:
      "trending, today, news, articles, wiki, google trends, world, economy, entertainment",
    url: canonicalUrl($page.url?.pathname ?? ""),
    image: wikitoday,
    description: "Explore today trending topics with wikitoday.",
    siteName: "wikitoday - Global Trends, News, Economy, Entertainment",
    date: "2023-08-07",
    language: "EN-US",
  };

  const pageHeaderProps: UpdateHeaderProps = $page.data?.headerProps || {};
  const jsonLd = $page.data?.jsonLd;

  const p = { ...defaultHeaderProps, ...pageHeaderProps };
</script>

<svelte:head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{p.title}</title>
  <meta name="keywords" content={p.keywords} />
  <meta name="description" content={p.description} />

  <!-- Other SEO-related tags (optional) -->
  <meta name="robots" content="index, follow" />
  <meta name="author" content="https://wikitoday.io" />

  <!-- hreflang -->
  <link rel="alternate" hreflang="en" href="https://wikitoday.io/EN-US" />
  <link rel="alternate" hreflang="ko" href="https://wikitoday.io/KO" />
  <link rel="alternate" hreflang="zh" href="https://wikitoday.io/ZH" />
  <link rel="alternate" hreflang="bg" href="https://wikitoday.io/BG" />
  <link rel="alternate" hreflang="cs" href="https://wikitoday.io/CS" />
  <link rel="alternate" hreflang="da" href="https://wikitoday.io/DA" />
  <link rel="alternate" hreflang="de" href="https://wikitoday.io/DE" />
  <link rel="alternate" hreflang="el" href="https://wikitoday.io/EL" />
  <link rel="alternate" hreflang="en-gb" href="https://wikitoday.io/EN-GB" />
  <link rel="alternate" hreflang="en-us" href="https://wikitoday.io/EN-US" />
  <link rel="alternate" hreflang="es" href="https://wikitoday.io/ES" />
  <link rel="alternate" hreflang="et" href="https://wikitoday.io/ET" />
  <link rel="alternate" hreflang="fi" href="https://wikitoday.io/FI" />
  <link rel="alternate" hreflang="fr" href="https://wikitoday.io/FR" />
  <link rel="alternate" hreflang="hu" href="https://wikitoday.io/HU" />
  <link rel="alternate" hreflang="id" href="https://wikitoday.io/ID" />
  <link rel="alternate" hreflang="it" href="https://wikitoday.io/IT" />
  <link rel="alternate" hreflang="ja" href="https://wikitoday.io/JA" />
  <link rel="alternate" hreflang="ko" href="https://wikitoday.io/KO" />
  <link rel="alternate" hreflang="lt" href="https://wikitoday.io/LT" />
  <link rel="alternate" hreflang="lv" href="https://wikitoday.io/LV" />
  <link rel="alternate" hreflang="nb" href="https://wikitoday.io/NB" />
  <link rel="alternate" hreflang="nl" href="https://wikitoday.io/NL" />
  <link rel="alternate" hreflang="pl" href="https://wikitoday.io/PL" />
  <link rel="alternate" hreflang="pt-br" href="https://wikitoday.io/PT-BR" />
  <link rel="alternate" hreflang="pt-pt" href="https://wikitoday.io/PT-PT" />
  <link rel="alternate" hreflang="ro" href="https://wikitoday.io/RO" />
  <link rel="alternate" hreflang="ru" href="https://wikitoday.io/RU" />
  <link rel="alternate" hreflang="sk" href="https://wikitoday.io/SK" />
  <link rel="alternate" hreflang="sl" href="https://wikitoday.io/SL" />
  <link rel="alternate" hreflang="sv" href="https://wikitoday.io/SV" />
  <link rel="alternate" hreflang="tr" href="https://wikitoday.io/TR" />
  <link rel="alternate" hreflang="uk" href="https://wikitoday.io/UK" />
  <link rel="alternate" hreflang="zh" href="https://wikitoday.io/ZH" />

  <!-- 데스크탑 페이지 -->
  <link rel="canonical" href={p.url} />
  <link
    rel="alternate"
    href="https://wikitoday.io"
    media="only screen and (max-width: 640px)"
  />

  <!-- 모바일 페이지 -->

  <meta name="language" content="English" />
  <meta name="revisit-after" content="7 days" />
  <meta name="image" content={p.image} />

  <!-- json+oembeded -->
  <!-- sveltekit관련 링크: https://sveltekit-embed.vercel.app/ -->

  <link
    data-rh="true"
    rel="alternate"
    type="application/json+oembed"
    href="https://wikitoday.io"
    title="Wikitoday"
  />

  <!-- google ld json -->
  <!-- refs: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=ko -->
  <!-- 각 기사들마다 title, image, author, date, 등등 달라져야함 -->

  <!-- Open Graph Meta Tags (optional) -->
  <meta property="og:title" content={p.title} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://wikitoday.io" />
  <meta property="og:image" content={p.image} />
  <meta property="og:description" content={p.description} />
  <meta property="og:site_name" content={p.siteName} />

  <!-- Twitter Card Meta Tags (optional) -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="" />
  <meta name="twitter:creator" content={p.author} />
  <meta name="twitter:title" content={p.title} />
  <meta name="twitter:description" content={p.description} />
  <meta name="twitter:image" content={p.image} />
  <meta name="twitter:url" content="https://wikitoday.io" />

  <meta name="apple-mobile-web-app-title" content="wikitoday.io" />
  <meta name="application-name" content="wikitoday.io" />

  {#if jsonLd}
    {@html serializeSchema(jsonLd)}
  {/if}
</svelte:head>
