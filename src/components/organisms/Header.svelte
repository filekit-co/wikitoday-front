<script lang="ts">
  import { page } from "$app/stores";
  import type { HeaderProps, UpdateHeaderProps } from "$lib/types";

  const defaultHeaderProps: HeaderProps = {
    title: "Wikitoday - Real-Time Popular Articles Based on Google Trends",
    author: "wikitoday.co",
    keywords:
      "Google Trends, real-time popular articles, https://wikitoday.co. k-pop, economy, and entertainment.",
    url: "https://wikitoday.co",
    image: "",
    description:
      "Discover the latest trending articles in real-time, powered by Google Trends, on https://wikitoday.co. Explore a variety of topics, including k-pop, economy, entertainment, and more.",
    siteName:
      "Wikitoday - Best news website provides real time, hot topic articles based on Google Trends",
  };

  const pageHeaderProps: UpdateHeaderProps = $page.data?.headerProps || {};

  const p = { ...defaultHeaderProps, ...pageHeaderProps };
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{p.title}</title>
  <meta name="keywords" content={p.keywords} />
  <meta name="description" content={p.description} />

  <!-- Other SEO-related tags (optional) -->
  <meta name="robots" content="index, follow" />
  <meta name="author" content="https://wikitoday.co" />

  <!-- 데스크탑 페이지 -->
  <link
    rel="alternate"
    href="https://wikitoday.co"
    media="only screen and (max-width: 640px"
  />

  <!-- 모바일 페이지 -->
  <link rel="canonical" href="https://wikitoday.co" />

  <meta name="language" content="English" />
  <meta name="revisit-after" content="7 days" />
  <meta name="image" content="" />

  <!-- json+oembeded -->
  <!-- sveltekit관련 링크: https://sveltekit-embed.vercel.app/ -->

  <link
    data-rh="true"
    rel="alternate"
    type="application/json+oembed"
    href="https://wikitoday.co"
    title="Wikitoday"
  />

  <!-- google ld json -->
  <!-- refs: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=ko -->
  <!-- 각 기사들마다 title, image, author, date, 등등 달라져야함 -->

  <!-- Open Graph Meta Tags (optional) -->
  <meta property="og:title" content={p.title} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://wikitoday.co" />
  <meta property="og:image" content="" />
  <meta property="og:description" content={p.description} />
  <meta property="og:site_name" content="https://wikitoday.co" />

  <!-- Twitter Card Meta Tags (optional) -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="" />
  <meta name="twitter:creator" content={p.author} />
  <meta name="twitter:title" content={p.title} />
  <meta name="twitter:description" content={p.description} />
  <meta name="twitter:image" content="" />
  <meta name="twitter:url" content="https://wikitoday.co" />

  <meta name="apple-mobile-web-app-title" content="wikitoday.co" />
  <meta name="application-name" content="wikitoday.co" />
  <link
    href="https://fonts.googleapis.com/css?family=Poppins:700"
    rel="stylesheet"
  />
</svelte:head>
