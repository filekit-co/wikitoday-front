<script lang="ts">
  import type { Article } from "$lib/types";
  import { handleClick } from "$lib/utils";

  export let articles: Article[];
</script>

<h2 class="text-3xl font-semibold">Trend News</h2>
<div class="grid grid-rows-5 py-8">
  {#each articles as article, index}
    <div
      on:click={() => handleClick(article.slug)}
      on:keydown={(e) => e.key === "Enter" && handleClick(article.slug)}
      class="flex items-center border-b-2 border-gray-200 cursor-pointer p-2 opacity-75 hover:opacity-100"
    >
      <span class="font-bold mr-4">{index + 1}</span>
      <div
        class="flex-grow text-md text-clip md:text-lg font-medium sm:text-base title pr-2"
      >
        {article.title}
      </div>
      <div class="w-24 h-24 flex-shrink-0 flex justify-end">
        <img
          class="w-full h-full object-cover rounded-lg"
          src={article.thumbnail}
          alt={article.title}
        />
      </div>
    </div>
  {/each}
</div>
