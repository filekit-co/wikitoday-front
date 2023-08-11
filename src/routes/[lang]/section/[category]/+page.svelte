<script lang="ts">
  import CategoryArticlePage from "@components/pages/CategoryArticlePage.svelte";
  import MainArticles from "@components/molecules/MainArticles.svelte";

  export let data;
  const articles = data.articles;
</script>

<CategoryArticlePage {data} />

<div class="lg:flex">
  <MainArticles {articles} />
</div>
