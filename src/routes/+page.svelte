<script lang="ts">
  import MainPage from "@components/pages/MainPage.svelte";
  export let data;
  const articles = data.articles;
</script>

<MainPage {articles} />
