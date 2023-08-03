<script lagn="ts">
  import SubPageMainArticle from "@components/molecules/SubPageMainArticle.svelte";
  import MainArticles from "@components/molecules/MainArticles.svelte";
  import TrendNews from "@components/molecules/TrendNews.svelte";
  export let data;
</script>

<SubPageMainArticle {data} />

<div class="flex">
  <MainArticles {data} />
  <TrendNews {data} />
</div>
