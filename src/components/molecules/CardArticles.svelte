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
    items = data.articles.slice(0, 4).map((article) => ({
      src: article.image,
      title: article.title,
      description: article.description,
    }));
  });
</script>

<div class="font-serif">
  <h2 class="text-3xl font-semibold">Recommended Articles</h2>

  <div class="grid grid-cols-4 w-full gap-8">
    {#each items as { src, title, description }}
      <div class=" py-4">
        <div class=" w-80 h-40 mb-4">
          <img
            class="w-full h-full object-cover rounded-lg"
            {src}
            alt={title}
          />
        </div>
        <h2 class="text-xl font-medium mb-4">{title}</h2>
        <span>{description}</span>
      </div>
    {/each}
  </div>
</div>
