<script lang="ts">
  import CategoryArticlePage from "@components/pages/CategoryArticlePage.svelte";
  import MainArticles from "@components/molecules/MainArticles.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<CategoryArticlePage {data} />

<div class="lg:flex">
  <MainArticles articles={data.articles} />
</div>
