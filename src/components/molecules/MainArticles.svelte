<script lang="ts">
  import { formatDate } from "$lib/utils.js";
  import { handleClick } from "$lib/utils";
  import type { Article } from "$lib/types";

  export let articles: Article[];
</script>

<div class="lg:w-3/4">
  <section class="w-full items-center lg:pr-4 lg:border-r-2 lg:border-r-black">
    <ul class="justify-center select-none">
      {#each articles as article}
        <li class="mb-8 bg-white">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div
            class="col-auto items-center cursor-pointer"
            on:click={() => handleClick(article.slug)}
          >
            <h1 class="sm:text-base md:text-3xl xl:text-4xl font-bold mb-6">
              {article.title}
            </h1>

            <article class="flex">
              <div
                class="w-1/2 h-[160px] md:h-[300px] text-ellipsis overflow-hidden mr-4"
              >
                <p class="text-gray-300 sm:text-sm md:text-lg font mb-2">
                  {article.category}
                </p>

                <p class="text-gray-200 sm:text-xs md:text-base font mb-4">
                  {formatDate(article.date)}
                </p>
                <p
                  class="text-black md:text-lg xl:text-2xl font-medium description"
                >
                  {article.description}
                </p>
              </div>

              <div class="w-1/2 h-[160px] md:h-[300px] relative block mx-auto">
                <img
                  class="w-full h-full object-cover block"
                  src={article.thumbnail}
                  alt={`${article.description}`}
                />
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
  @media (max-width: 640px) {
    .description {
      font-size: 14px;
    }

    .font {
      font-size: 10px;
    }
  }
</style>
