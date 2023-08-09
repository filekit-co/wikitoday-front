<script lang="ts">
  import { handleClick } from "$lib/utils";
  import type { Article } from "$lib/types";
  export let mainArticle: Article;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click={() => handleClick(mainArticle)}
  class="lg:flex py-4 px-4 items-center cursor-pointer"
>
  <div class="md:w-full lg:w-1/2 h-72 lg:mr-8">
    <img
      class="w-full h-full rounded-tl-2xl rounded-br-2xl"
      src={mainArticle.thumbnail}
      alt={mainArticle.title}
    />
  </div>

  <div class="w-full lg:w-1/2">
    <h1 class="md:text-4xl font-bold sm:mb-12 title">
      {mainArticle.title}
    </h1>
    <p class=" md:text-lg lg:text-xl description">
      {mainArticle.description}
    </p>
  </div>
</div>

<style>
  @media (max-width: 640px) {
    .title {
      font-size: 16px;
      margin-bottom: 16px;
    }
    .description {
      font-size: 12px;
    }
  }
</style>
