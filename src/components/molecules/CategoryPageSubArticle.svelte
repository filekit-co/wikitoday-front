<script lang="ts">
  import { handleClick } from "$lib/utils";
  import type { Article } from "$lib/types";

  export let subArticle: Article;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click={() => handleClick(subArticle.slug)}
  class="lg:flex py-4 px-4 items-center cursor-pointer"
>
  <div class="md:w-full lg:w-1/2 h-72 lg:mr-8">
    <img
      class="w-full h-full object-cover rounded-tl-2xl rounded-br-2xl"
      src={subArticle.thumbnail}
      alt={subArticle.title}
    />
  </div>

  <div class="w-full lg:w-1/2">
    <h1 class="md:text-2xl font-bold sm:mb-12 title">
      {subArticle.title}
    </h1>
  </div>
</div>

<style>
  @media (max-width: 640px) {
    .title {
      font-size: 16px;
      margin-bottom: 16px;
    }
  }
</style>
