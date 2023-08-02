<script lang="ts">
  import type { ImageType } from "$lib/types";
  import { onMount } from "svelte";

  interface DataType {
    articles: {
      title: string;
      category: string;
      description: string;
      date: string;
      image: string;
    }[];
  }

  export let data: DataType;
  let items: ImageType[] = [];

  onMount(() => {
    items = data.articles.slice(0, 5).map((article) => ({
      src: article.image,
      title: article.title,
      description: article.description,
    }));
  });
</script>

<div class="w-1/4 font-serif pl-4">
  <h2 class="text-2xl font-semibold">Trend NEWS</h2>
  <div class="grid grid-rows-5 h-full">
    {#each items as { src, title, description }, index}
      <div class="flex my-4 items-center">
        <span class="text-6xl font-bold mr-4">{index + 1}</span>
        <div class="flex-grow">
          <h2 class="text-xl font-medium mb-4">{title}</h2>
          <span class="text-lg font-normal">{description}</span>
        </div>

        <div class="w-28 h-28 flex-shrink-0 flex justify-end">
          <!-- Set fixed image dimensions and right alignment -->
          <img class="w-full h-full object-cover" {src} alt={title} />
        </div>
      </div>
    {/each}
  </div>
</div>
