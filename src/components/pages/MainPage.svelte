<script lang="ts">
  import MainArticles from "@components/molecules/MainArticles.svelte";
  import Opinions from "@components/molecules/Opinions.svelte";
  import BreakingNews from "@components/molecules/BreakingNews.svelte";
  import TrendNews from "@components/molecules/TrendNews.svelte";
  import CardArticles from "@components/molecules/CardArticles.svelte";
  import type { Article } from "$lib/types";

  export let articles: Article[];
</script>

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
