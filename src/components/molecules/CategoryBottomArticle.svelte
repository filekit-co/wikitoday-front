<script lang="ts">
  import type { Article } from "$lib/types";
  import { formatDate, handleClickInCategory } from "$lib/utils";
  export let articles: Article[];
</script>

<div>
  <section class="items-center">
    <ul class="justify-center select-none">
      {#each articles as article}
        <li
          class="mb-5 md:mb-8 bg-white shadow-lg rounded-3xl p-6 lg:p-8 transition duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div
            on:click={() => handleClickInCategory(article.slug)}
            class="col-auto items-center cursor-pointer"
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
                  class="text-black md:text-lg lg:text-xl font-medium description"
                >
                  {article.description}
                </p>
              </div>

              <div class="w-1/2 h-[160px] md:h-[300px] relative block mx-auto">
                <img
                  class="w-full h-full object-cover block rounded-xl"
                  src={article.thumbnail}
                  alt={`${article.description}`}
                />
              </div>
            </article>
          </div>
        </li>
      {/each}
    </ul>
  </section>
</div>
