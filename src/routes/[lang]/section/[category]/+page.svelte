<script lagn="ts">
  import CategoryArticlePage from "@components/pages/CategoryArticlePage.svelte";
  import MainArticles from "@components/molecules/MainArticles.svelte";
  import TrendNews from "@components/molecules/TrendNews.svelte";
  export let data;
  const articles = data.articles;
</script>

<CategoryArticlePage {data} />

<div class="lg:flex">
  <MainArticles {articles} />
  <TrendNews {articles} />
</div>
