<script lang="ts">
  import { onMount } from "svelte";
  import type { DataType, ImageType } from "$lib/types";
  import Carosel from "../atoms/Carosel.svelte";
  import { handleClick } from "$lib/utils";

  export let data: DataType;
  let images: ImageType[] = [];

  onMount(() => {
    images = data.articles.map((article) => ({
      src: article.thumbnail,
      title: article.title,
      keywords: article.keywords,
    }));
  });
</script>

<div class="lg:w-1/4 lg:pl-4">
  <h2 class="text-3xl font-semibold text-gray-400 mb-4">Opinion</h2>

  <!-- carousel -->
  <Carosel {images} />

  <!-- Small opinion articles -->
  <div class="h-full mt-48">
    <hr class="h-px bg-gray-500 border-1" />
    {#each data.articles as article}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={() => handleClick(article)}
        class="flex my-4 items-center cursor-pointer"
      >
        <div class="flex-grow">
          <h2 class="font md:text-2xl lg:text-lg font-bold mb-4 mr-4">
            {article.title}
          </h2>
        </div>

        <div
          class="sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-20 lg:h-20 flex-shrink-0 flex justify-end image"
        >
          <!-- Set fixed image dimensions and right alignment -->
          <img
            class="small-image w-full h-full object-cover"
            src={article.thumbnail}
            alt={article.title}
          />
        </div>
      </div>
      <hr class="h-px bg-gray-500 border-1" />
    {/each}
  </div>
</div>

<style>
  @media (max-width: 640px) {
    .font {
      font-size: 14px;
      font-weight: 600;
    }
    .image {
      width: 80px;
      height: 80px;
    }
  }
  .small-image {
    border-radius: 50%;
  }
</style>
