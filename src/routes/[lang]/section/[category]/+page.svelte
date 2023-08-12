<script lang="ts">
  import CategoryPage from "@components/pages/CategoryPage.svelte";

  export let data;
  const articles = data.articles;
</script>

<CategoryPage {articles} />
