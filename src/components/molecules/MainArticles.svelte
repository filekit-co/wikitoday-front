<script lang="ts">
  import { formatDate } from "$lib/utils.js";
  import { handleClick } from "$lib/utils";
  import type { DataType } from "$lib/types";

  export let data: DataType;
</script>

<div class="w-3/4">
  <section class="w-full items-center pr-4 border-r-2 border-r-black">
    <ul class="justify-center">
      {#each data.articles.slice(0, 4) as article}
        <li class="mb-8 bg-white">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div
            class="col-auto items-center cursor-pointer"
            on:click={() => handleClick(article)}
          >
            <h1 class="text-4xl font-bold mb-6">
              {article.title}
            </h1>

            <article class="flex">
              <div class="w-1/2 mr-4">
                <p class="text-gray-300 text-lg mb-3">
                  {article.category}
                </p>
                <span class="text-black text-2xl font-bold"
                  >{article.description}</span
                >
                <p class="text-gray-200 text-base mt-3">
                  {formatDate(article.date)}
                </p>
              </div>

              <div class="w-1/2">
                <div class="flex-grow flex justify-end">
                  <img
                    class="image"
                    src={article.image}
                    alt={`${article.description}`}
                  />
                </div>
              </div>
            </article>
          </div>
        </li>
        <hr class="h-px mb-6 bg-gray-200 border-0 dark:bg-gray-700" />
      {/each}
    </ul>
  </section>
</div>

<style>
  .image {
    width: 600px;
    height: 300px;
    object-fit: cover;
  }
</style>
