<script lang="ts">
  import MainArticles from "@components/molecules/MainArticles.svelte";
  import Opinions from "@components/molecules/Opinions.svelte";
  import BreakingNews from "@components/molecules/BreakingNews.svelte";
  import TrendNews from "@components/molecules/TrendNews.svelte";
  import CardArticles from "@components/molecules/CardArticles.svelte";

  export let data;
</script>

<div class="lg:flex">
  <MainArticles {data} />
  <Opinions {data} />
</div>

<hr class="h-1 my-6 bg-blck border-0 dark:bg-black" />

<div class="lg:flex">
  <BreakingNews {data} />
  <TrendNews {data} />
</div>

<hr class="h-1 my-6 bg-blck border-0 dark:bg-black" />

<CardArticles {data} />

<hr class="h-1 my-6 bg-blck border-0 dark:bg-black" />
