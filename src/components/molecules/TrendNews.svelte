<script lang="ts">
  import type { DataType } from "$lib/types";
  import { handleClick } from "$lib/utils";

  export let data: DataType;
</script>

<div class="w-1/4 pl-4">
  <h2 class="text-3xl font-semibold">Trend NEWS</h2>
  <div class="grid grid-rows-5 h-full py-8">
    {#each data.articles.slice(0, 5) as article, index}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={() => handleClick(article)}
        class="flex items-center border-b-2 border-b-gray-200 cursor-pointer"
      >
        <span class="text-6xl font-bold mr-4">{index + 1}</span>
        <div class="flex-grow">
          <h2 class="text-xl font-medium mb-4">{article.title}</h2>
        </div>

        <div class="w-28 h-28 flex-shrink-0 flex justify-end">
          <!-- Set fixed image dimensions and right alignment -->
          <img
            class="w-full h-full object-cover"
            src={article.image}
            alt={article.title}
          />
        </div>
      </div>
    {/each}
  </div>
</div>
