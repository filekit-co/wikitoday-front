<script lang="ts">
  import type { Article } from "$lib/types";
  import { handleClick } from "$lib/utils";

  export let articles: Article[];
</script>

<div>
  <h2 class="text-3xl font-semibold">Recommended Articles</h2>

  <div class="grid grid-cols-4 w-full gap-4">
    {#each articles.slice(0, 4) as article}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={() => handleClick(article.slug)}
        class=" py-4 cursor-pointer"
      >
        <div class="w-full h-28 mb-4">
          <img
            class="w-full h-full object-cover rounded-lg"
            src={article.thumbnail}
            alt={article.title}
          />
        </div>
        <h2 class="text-sm md:text-lg mb-4 title">{article.title}</h2>
        <!-- <span class="text-xs md:text-base description"
          >{article.description}</span
        > -->
      </div>
    {/each}
  </div>
</div>

<style>
  @media (max-width: 640px) {
    .title {
      font-size: 12px;
    }
  }
</style>
