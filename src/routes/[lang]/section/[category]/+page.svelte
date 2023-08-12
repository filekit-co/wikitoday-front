<script lang="ts">
  import type { PageData } from "./$types";
  import CategoryPage from "@components/pages/CategoryPage.svelte";

  export let data: PageData;
  const { articles } = data;
</script>

<CategoryPage {articles} />
