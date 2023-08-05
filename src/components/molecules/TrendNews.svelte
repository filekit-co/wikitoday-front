<script lang="ts">
  import type { DataType } from "$lib/types";
  import { handleClick } from "$lib/utils";

  export let data: DataType;
</script>

<hr class="lg:hidden h-1 my-6 bg-blck border-0 dark:bg-black" />
<div class="lg:w-1/4 lg:pl-4 md:mt-12">
  <h2 class="text-3xl font-semibold">Trend NEWS</h2>
  <div class="grid grid-rows-5 py-8">
    {#each data.articles.slice(0, 6) as article, index}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={() => handleClick(article)}
        class="flex lg:flex-col lg:py-12 items-center border-b-2 border-b-gray-200 cursor-pointer"
      >
        <span class="lg:hidden text-6xl lg:text-4xl font-bold mr-4"
          >{index + 1}</span
        >
        <div class="flex-grow lg:flex-grow-0 lg:mb-8">
          <span class="md:text-lg lg:text-xl font-medium title"
            >{article.title}</span
          >
        </div>

        <div class=" w-24 h-24 lg:w-48 lg:h-60 flex-shrink-0 flex justify-end">
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

<style>
  @media (max-width: 640px) {
    .title {
      font-size: 12px;
    }
  }
</style>
