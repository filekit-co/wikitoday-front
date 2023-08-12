<script lang="ts">
  import { page } from "$app/stores";
  import type { HeaderProps, LanguageKey, UpdateHeaderProps } from "$lib/types";
  import { serializeSchema } from "$lib/utils";
  import wikitoday from "$lib/assets/wikitoday.png";
  import { PUBLIC_BASE_URL } from "$env/static/public";
  import { languageKeys, languageToHreflang } from "$lib/datas";

  const defaultHeaderProps: HeaderProps = {
    title: "wikitoday.io - Get trending news & wiki",
    author: "wikitoday.io",
    keywords:
      "trending, today, news, articles, wiki, google trends, world, economy, entertainment",
    image: wikitoday,
    description: "Explore trending topics with wikitoday",
    siteName: "wikitoday - Global Trends, News, Economy, Entertainment",
    date: "2023-08-07",
    language: "EN-US",
  };

  let candidLanguages: LanguageKey[];
  let canonicalUrl: string;
  let p: UpdateHeaderProps;

  $: jsonLd = $page.data?.jsonLd;
  $: candidLanguages = $page.data?.candidLanguages || languageKeys;
  $: canonicalUrl = $page.url?.pathname
    ? `${PUBLIC_BASE_URL}${$page.url?.pathname}`
    : `${PUBLIC_BASE_URL}`;
  $: p = { ...defaultHeaderProps, ...$page.data?.headerProps };

  const getAlternateUrl = (languageKey: LanguageKey) => {
    const pathSlug = $page.url?.pathname;
    if (pathSlug) {
      const newPathSlug = pathSlug.replace(/^\/[A-Z-]+/, `/${languageKey}`);
      return `${PUBLIC_BASE_URL}${newPathSlug}`;
    }
    return `${PUBLIC_BASE_URL}/${languageKey}`;
  };
</script>

<svelte:head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{p.title}</title>
  <meta name="keywords" content={p.keywords} />
  <meta name="description" content={p.description} />

  <!-- Other SEO-related tags (optional) -->
  <meta name="robots" content="index, follow" />
  <meta name="author" content={PUBLIC_BASE_URL} />

  <!-- hreflang -->
  {#each candidLanguages as languageKey}
    <link
      rel="alternate"
      hreflang={languageToHreflang[languageKey]}
      href={getAlternateUrl(languageKey)}
    />
  {/each}

  <!-- 데스크탑 페이지 -->
  <link rel="canonical" href={canonicalUrl} />

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
    href={canonicalUrl}
    title="Wikitoday"
  />

  <!-- Open Graph Meta Tags (optional) -->
  <meta property="og:title" content={p.title} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonicalUrl} />
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
  <meta name="twitter:url" content={canonicalUrl} />

  <meta name="apple-mobile-web-app-title" content="wikitoday.io" />
  <meta name="application-name" content="wikitoday.io" />

  {#if jsonLd}
    {@html serializeSchema(jsonLd)}
  {/if}
</svelte:head>
