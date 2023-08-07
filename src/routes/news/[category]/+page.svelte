<script lagn="ts">
  import CategoryArticlePage from "@components/pages/CategoryArticlePage.svelte";
  import MainArticles from "@components/molecules/MainArticles.svelte";
  import TrendNews from "@components/molecules/TrendNews.svelte";
  export let data;
</script>

<CategoryArticlePage {data} />

<div class="lg:flex">
  <MainArticles {data} />
  <!-- <TrendNews {data} /> -->
</div>
