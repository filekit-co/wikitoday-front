<script lang="ts">
  import { onMount } from "svelte";
  import type { Article, CaroselType as CaroselData } from "$lib/types";
  import Carosel from "../atoms/Carosel.svelte";
  import { handleClick } from "$lib/utils";

  export let articles: Article[];
  let caroselData: CaroselData[] = articles.map((article) => ({
    src: article.thumbnail,
    title: article.title,
    keywords: article.keywords,
    slug: article.slug,
  }));
</script>

<div class="md:w-1/6 lg:w-1/4 md:pl-4 lg:pl-8">
  <h2 class="text-xl font-semibold mb-4 flex items-center">
    <span class="text-red-600 text-3xl leading-none pr-1">•</span>Live Updates
  </h2>

  <Carosel {caroselData} />

  <!-- Small opinion articles -->
  <div class="h-full mt-8">
    <hr class="h-px bg-gray-500 border-1" />
    {#each articles as article}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={() => handleClick(article.slug)}
        class="flex my-4 items-center cursor-pointer select-none"
      >
        <div class="flex-grow">
          <h2 class="font md:text-sm lg:text-lg font-bold mb-4 mr-4">
            {article.title}
          </h2>
        </div>

        <div
          class="sm:w-10 sm:h-10 md:h-20 md:w-20 flex-shrink-0 flex justify-end image"
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
