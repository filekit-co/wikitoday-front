<script lang="ts">
  import type { Article } from "$lib/types";
  export let articles: Article[];
  import { handleClick } from "$lib/utils";
</script>

<div class=" shadow-xl rounded-3xl">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    on:click={() => handleClick(articles[0].slug)}
    class="rounded-xl lg:flex py-4 px-2 items-center justify-center cursor-pointer duration-300 transform hover:scale-105 hover:shadow-2xl"
  >
    <div class="md:w-full lg:w-1/2 h-[450px] mb-4 lg:mb-0 lg:mr-4">
      <img
        class="w-full h-full rounded-2xl"
        src={articles[0].thumbnail}
        alt={articles[0].title}
      />
    </div>

    <div class="w-full lg:w-1/2">
      <h1 class="md:text-2xl lg:text-3xl font-bold mb-4 title">
        {articles[0].title}
      </h1>
      <p class=" md:text-lg lg:text-xl description">
        {articles[0].description}
      </p>
    </div>
  </div>

  <div class="grid grid-cols-2 justify-center items-start">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    {#each articles.slice(1, 3) as article}
      <div
        class=" rounded-xl px-2 cursor-pointer duration-300 transform hover:scale-105 hover:shadow-2xl"
        on:click={() => handleClick(article.slug)}
      >
        <div class="w-full h-[150px] md:h-[250px] lg:h-[300px] mb-4">
          <!-- svelte-ignore a11y-missing-attribute -->
          <img
            class="w-full h-full object-cover rounded-2xl"
            src={article.thumbnail}
          />
        </div>

        <h1 class="text-[12px] md:text-lg font-semibold mb-4">
          {article.title}
        </h1>
      </div>
    {/each}
  </div>
</div>
