<script lang="ts">
  import MainPage from "@components/pages/MainPage.svelte";
  import type { PageData } from "./$types";
  import { onMount } from "svelte";
  import { loadAd } from "$lib/utils";

  export let data: PageData;

  onMount(() => {
    loadAd("adContainer", "83d8b4aa7dfbdbef30f7c137079151d2", 300, 250);
  });
</script>

<div id="adContainer" />
<MainPage
  mainArticles={data.mainArticles}
  opinionArticles={data.opinionArticles}
  cardArticles={data.cardArticles}
/>
