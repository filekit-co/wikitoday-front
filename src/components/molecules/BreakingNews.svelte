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
        class="lg:flex border-b-2 border-x-2 border-gray-200 px-4 py-4 cursor-pointer items-center"
      >
        <div class="lg:w-1/2 lg:col-auto">
          <h2 class="sm:text-sm lg:text-xl font-bold mb-4 pr-2 title">
            {article.title}
          </h2>
        </div>

        <div class="lg:w-1/2 lg:pl-2">
          <div
            class="w-full h-[100px] lg:h-[150px] xl:h-[200px] flex-grow flex justify-end"
          >
            <img
              class="w-full h-full rounded-tl-lg rounded-br-lg"
              src={article.thumbnail}
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
      font-size: 14px;
    }
    .image {
      width: 200px;
      height: 100px;
      object-fit: cover;
    }
  }

  @media (max-width: 768px) {
    .image {
      width: 100%;
      height: 100px;
      object-fit: cover;
    }
  }
</style>
