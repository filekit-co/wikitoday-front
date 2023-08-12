<script lang="ts">
  import MainArticles from "@components/molecules/MainArticles.svelte";
  import Opinions from "@components/molecules/Opinions.svelte";
  import CardArticles from "@components/molecules/CardArticles.svelte";
  import type { Article } from "$lib/types";
  import {
    NUM_MAIN_ARTICLES,
    NUM_OPINIONS_ARTICLES,
    NUM_CARD_ARTICLES,
  } from "$lib/consts";

  export let articles: Article[];

  const mainArticles = articles.slice(0, NUM_MAIN_ARTICLES);
  const opinionArticles = articles.slice(0, NUM_OPINIONS_ARTICLES);
  const cardArticles = articles
    .slice(NUM_MAIN_ARTICLES, articles.length)
    .map((article) => ({ article, random: Math.random() })) // 각 기사에 무작위 숫자를 할당
    .sort((a, b) => a.random - b.random) // 무작위 숫자를 기준으로 정렬
    .slice(0, NUM_CARD_ARTICLES) // 상위 4개의 기사 선택
    .map((item) => item.article); // 기사만 추출
</script>

{#if articles.length > 0}
  <div class="md:flex">
    <MainArticles articles={mainArticles} />
    <Opinions articles={opinionArticles} />
  </div>

  <hr class="h-1 my-6 bg-blck border-0 dark:bg-black" />

  <CardArticles articles={cardArticles} />
{:else}
  <div class="flex flex-col items-center justify-center mt-5">
    <em class="text-sm sm:text-lg md:text-2xl text-gray-600 mb-4 line-through">
      No articles available
    </em>
    <img
      src="https://i.giphy.com/media/3orif8b64kZwnaz8A0/giphy.webp"
      class="w-full lg:w-1/2"
      alt="nothing"
    />
  </div>
{/if}
