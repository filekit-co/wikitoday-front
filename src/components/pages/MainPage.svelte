<script lang="ts">
  import MainArticles from "@components/molecules/MainArticles.svelte";
  import Opinions from "@components/molecules/Opinions.svelte";
  import BreakingNews from "@components/molecules/BreakingNews.svelte";
  import TrendNews from "@components/molecules/TrendNews.svelte";
  import CardArticles from "@components/molecules/CardArticles.svelte";
  import type { Article } from "$lib/types";
  import { page } from "$app/stores";
  import { handleClick } from "$lib/utils";

  export let articles: Article[];
  let pageSize = 10;
  $: totalItems = articles.length;
  $: totalPages = Math.ceil(totalItems / pageSize);
  $: currentPage =
    (Number($page.url.searchParams.get("pageNum")) || 0) / pageSize;

  async function handle(pageSize: number, pageNum: number) {
    await fetch(`api/articles?limit=${pageSize}&skip=${pageNum}`);
  }
</script>

<nav>
  {#each Array(totalPages) as _, index}
    <!-- <a
      href="?limit={pageSize}&skip={pageSize * index}"
      class={currentPage === index ? "text-blue-600" : "text-gray-800"}
    >
      {index + 1}
    </a> -->

    <button on:click={() => handleClick(pageSize, pageSize * index)}>
      {index + 1}
    </button>
  {/each}
</nav>

<div class="lg:flex">
  <MainArticles {articles} />
  <Opinions {articles} />
</div>

<hr class="h-1 my-6 bg-blck border-0 dark:bg-black" />

<div class="lg:flex">
  <BreakingNews {articles} />
  <TrendNews {articles} />
</div>

<hr class="h-1 my-6 bg-blck border-0 dark:bg-black" />

<CardArticles {articles} />

<hr class="h-1 my-6 bg-blck border-0 dark:bg-black" />
