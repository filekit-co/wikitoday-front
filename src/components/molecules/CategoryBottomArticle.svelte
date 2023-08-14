<script lang="ts">
  import type { Article } from "$lib/types";
  import { formatDate, handleClick } from "$lib/utils";
  export let articles: Article[];
</script>

<div>
  <section class="container">
    <ul>
      {#each articles as article}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li
          class="bg-white py-2 transition duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer border-b border-gray-300"
          on:click={() => handleClick(article.slug)}
        >
          <div class="flex gap-4 items-start">
            <div class="w-1/3 h-[113px] md:h-[180px] relative block mx-auto">
              <img
                class="w-full h-full object-cover block"
                src={article.thumbnail}
                alt={`${article.description}`}
              />
            </div>

            <div class="w-2/3 flex-col">
              <h1 class="text-lg md:text-xl font-bold mb-2">
                {article.title}
              </h1>

              <article>
                <div
                  class="text-sm h-[113px] md:h-[108px] overflow-hidden mr-4 hidden sm:block"
                >
                  <p class="text-gray-500 mb-2">
                    {article.category}
                  </p>

                  <p class="text-gray-400 mb-4">
                    {formatDate(article.date)}
                  </p>
                  <p class="text-gray-700 font-medium description">
                    {article.description}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </li>
      {/each}
    </ul>
  </section>
</div>
