<script lang="ts">
  import type { DataType } from "$lib/types";
  import { handleClick } from "$lib/utils";

  export let data: DataType;
</script>

<div class="lg:w-3/4 lg:pr-4 lg:border-r-2 lg:border-r-black">
  <p class="font-semibold text-3xl mb-4">Breaking NEWS</p>

  <hr class="h-px bg-gray-500 border-4" />

  <div class="grid grid-rows-5 grid-cols-2">
    {#each data.articles as article}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={() => handleClick(article)}
        class="flex border-b-2 border-x-2 border-gray-200 px-4 py-4 cursor-pointer items-center"
      >
        <div class="w-1/2 col-auto">
          <h2 class="sm:text-sm md:text-xl font-bold mb-4 pr-2 title">
            {article.title}
          </h2>
        </div>

        <div class="w-1/2 pl-2">
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
  @media (max-width: 640px) {
    .title {
      font-size: 16px;
    }
  }
  .image {
    width: 200px;
    height: 100px;
    object-fit: cover;
  }
</style>
