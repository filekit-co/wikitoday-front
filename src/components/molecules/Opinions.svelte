<script lang="ts">
  import { onMount } from "svelte";
  import type { DataType, ImageType } from "$lib/types";
  import Carosel from "../atoms/Carosel.svelte";
  import { handleClick } from "$lib/utils";

  export let data: DataType;
  let images: ImageType[] = [];

  onMount(() => {
    images = data.articles.map((article) => ({
      src: article.image,
      title: article.title,
    }));
  });
</script>

<div class="w-1/4 pl-4">
  <h2 class="text-3xl font-semibold text-gray-400 mb-4">Opinion</h2>

  <!-- carousel -->
  <Carosel {images} />

  <!-- Small opinion articles -->
  <div class="h-full">
    {#each data.articles as article}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={() => handleClick(article)}
        class="flex my-4 items-center cursor-pointer"
      >
        <div class="flex-grow">
          <h2 class="text-xl font-medium mb-4 mr-4">{article.title}</h2>
        </div>

        <div class="w-20 h-20 flex-shrink-0 flex justify-end">
          <!-- Set fixed image dimensions and right alignment -->
          <img
            class="small-image w-full h-full object-cover"
            src={article.image}
            alt={article.title}
          />
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .small-image {
    border-radius: 50%;
  }
</style>
