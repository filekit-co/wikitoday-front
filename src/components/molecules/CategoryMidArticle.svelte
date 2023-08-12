<script lang="ts">
  import type { Article } from "$lib/types";
  import { handleClickInCategory } from "$lib/utils";
  export let articles: Article[];
</script>

<div class="grid grid-cols-3 gap-1 md:gap-4">
  {#each articles.slice(-3) as article}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      on:click={() => handleClickInCategory(article.slug)}
      class="rounded-xl cursor-pointer transition duration-300 transform hover:scale-105 hover:shadow-2xl"
    >
      <div class="w-full h-[150px] md:h-[300px] mb-4">
        <img
          class="w-full h-full object-cover rounded-lg"
          src={article.thumbnail}
          alt={article.title}
        />
      </div>
      <h2 class=" text-xs md:text-lg">{article.title}</h2>
    </div>
  {/each}
</div>
