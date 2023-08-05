<script lang="ts">
  import TrendNews from "@components/molecules/TrendNews.svelte";
  import Header from "@components/organisms/Header.svelte";
  export let data;

  const { article } = data;
</script>

<Header />

<div class="flex">
  <div class="container">
    {@html article.html}
  </div>

  <!-- <TrendNews {data} /> -->
</div>

<!-- @html stylying guide -->
<!-- https://joyofcode.xyz/global-styles-in-sveltekit -->

<style>
  .container {
    font-family: "Noto Serif KR", serif;
    font-family: "Playfair Display", serif;
  }

  :global(.container h1) {
    font-size: 40px;
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 20px;
  }

  :global(.container h2) {
    font-size: 35px;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  :global(.container details) {
    font-size: 20px;
    margin-bottom: 20px;
    cursor: pointer;
  }

  :global(.container details summary) {
    margin-bottom: 20px;
  }

  :global(.container details summary b) {
    font-size: 20px;
    font-weight: 500;
  }

  :global(.container h4) {
    font-size: 15px;
    font-weight: 500;
    margin: 16px 0;
    color: #d8d8d8;
  }

  :global(.container p) {
    font-size: 18px;
    margin-top: 16px;
    margin-bottom: 16px;
    line-height: 1.4;
  }

  :global(.container p em) {
    font-size: 18px;
    font-weight: 500;
    color: #d8d8d8;
  }
</style>
