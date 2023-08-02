<script lang="ts">
  import { onMount } from "svelte";
  import type { ImageType } from "$lib/types";
  import Carosel from "../atoms/Carosel.svelte";

  export let data;
  let images: ImageType[] = [];

  onMount(() => {
    images = data.articles.map((article) => ({
      src: article.image,
      title: article.title,
    }));
  });
</script>

<div class="w-1/4 font-serif pl-4">
  <h2 class="text-2xl font-semibold text-gray-300 mb-4">Opinion</h2>

  <!-- carousel -->
  <Carosel {images} />

  <!-- Small opinion articles -->
  <div class=" h-full">
    {#each images as { src, title }}
      <div class="flex my-4 items-center">
        <div class="flex-grow">
          <h2 class="text-xl font-medium mb-4 mr-4">{title}</h2>
        </div>

        <div class="w-20 h-20 flex-shrink-0 flex justify-end">
          <!-- Set fixed image dimensions and right alignment -->
          <img
            class="small-image w-full h-full object-cover"
            {src}
            alt={title}
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
