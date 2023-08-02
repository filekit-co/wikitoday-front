<script lang="ts">
  import { onMount } from "svelte";
  import type { ImageType } from "$lib/types";
  import Carosel from "../atoms/Carosel.svelte";

  export let data;
  let images: ImageType[] = [];

  onMount(() => {
    images = data.articles.slice(0, 3).map((article) => ({
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
  {#each data.articles as article}
    <!-- {#if article.category === "Opinion/Editorial"} -->
    <div class="flex py-4 border-t-2">
      <span class="text-lg font-normal">{article.title}</span>
      <div class="flex-grow flex justify-end">
        <img
          class="small-image"
          src={article.image}
          alt={`${article.description}`}
        />
      </div>
    </div>
    <!-- {/if} -->
  {/each}
</div>

<style>
  .small-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
</style>
