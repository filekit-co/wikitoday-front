<script lang="ts">
  import MainPage from "@components/pages/MainPage.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<MainPage
  mainArticles={data.mainArticles}
  opinionArticles={data.opinionArticles}
  cardArticles={data.cardArticles}
/>
