<script lang="ts">
  import CategoryArticlePage from "@components/molecules/CategoryTopArticle.svelte";
  import MainArticles from "@components/molecules/MainArticles.svelte";
  import TrendNews from "@components/molecules/TrendNews.svelte";
  import CategoryPage from "@components/pages/CategoryPage.svelte";

  export let data;
  const articles = data.articles;
</script>

<CategoryPage {articles} />

<!-- <div class="lg:flex">
  <MainArticles {articles} />
  <TrendNews {articles} />
</div> -->
