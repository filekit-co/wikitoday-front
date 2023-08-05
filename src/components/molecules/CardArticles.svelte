<script lang="ts">
  import type { DataType } from "$lib/types";
  import { handleClick } from "$lib/utils";

  export let data: DataType;
</script>

<div>
  <h2 class="text-3xl font-semibold">Recommended Articles</h2>

  <div class="grid grid-cols-4 w-full gap-8">
    {#each data.articles.slice(0, 4) as article}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div on:click={() => handleClick(article)} class=" py-4 cursor-pointer">
        <div class="w-30 h-28 mb-4">
          <img
            class="w-full h-full object-cover rounded-lg"
            src={article.image}
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
