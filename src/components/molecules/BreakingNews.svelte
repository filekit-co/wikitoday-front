<script lang="ts">
  import type { DataType } from "$lib/types";
  import { handleClick } from "$lib/utils";

  export let data: DataType;
</script>

<div class="w-3/4 pr-4 border-r-2 border-r-black">
  <p class="font-semibold text-3xl mb-4">Breaking NEWS</p>

  <hr class="h-px bg-gray-500 border-4" />

  <div class="grid grid-rows-5 grid-cols-2">
    {#each data.articles as article}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={() => handleClick(article)}
        class="flex border-b-2 border-x-2 border-gray-200 px-4 py-4 cursor-pointer"
      >
        <div class="w-2/3 col-auto">
          <h2 class="text-xl font-medium mb-4">{article.title}</h2>
        </div>
        <div class="w-1/3">
          <div class="flex-grow flex justify-end">
            <img
              class="image rounded-tl-lg rounded-br-lg"
              src={article.image}
              alt={`${article.description}`}
            />
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .image {
    width: 170px;
    height: 100px;
    object-fit: cover;
  }
</style>
