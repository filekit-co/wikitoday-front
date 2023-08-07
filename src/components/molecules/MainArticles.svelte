<script lang="ts">
  import { formatDate } from "$lib/utils.js";
  import { handleClick } from "$lib/utils";
  import type { DataType } from "$lib/types";

  export let data: DataType;
</script>

<div class="lg:w-3/4">
  <section class="w-full items-center lg:pr-4 lg:border-r-2 lg:border-r-black">
    <ul class="justify-center">
      {#each data.articles as article}
        <li class="mb-8 bg-white">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div
            class="col-auto items-center cursor-pointer"
            on:click={() => handleClick(article)}
          >
            <h1
              class="sm:text-base md:text-3xl xl:text-4xl font-bold mb-6 title"
            >
              {article.title}
            </h1>

            <article class="flex">
              <div class="w-1/2 mr-4 h-[300px] flex flex-col justify-evenly">
                <p
                  class="text-gray-300 sm:text-sm md:text-lg font text-ellipsis overflow-hidde"
                >
                  {article.category}
                </p>
                <span
                  class="text-black md:text-lg xl:text-2xl font-bold description text-ellipsis overflow-hidden"
                >
                  {article.description}
                </span>
                <p
                  class="text-gray-200 sm:text-xs md:text-base font text-ellipsis overflow-hidden"
                >
                  {formatDate(article.date)}
                </p>
              </div>

              <div class="w-1/2 py-4 h-[300px]">
                <img
                  class="w-full h-full"
                  src={article.image}
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
  @media (max-width: 500px) {
    .title {
      font-size: 18px;
      font-weight: 600;
    }
    .description {
      font-size: 12px;
    }
    .font {
      font-size: 10px;
    }
  }

  @media (min-width: 1024px) {
    .image {
      width: 100%;
      height: 300px;
    }
  }

  @media (max-width: 1024px) {
    .image {
      width: 100%;
      height: 300px;
    }
  }

  @media (min-width: 768px) {
    .image {
      width: 100%;
      height: 200px;
    }
  }

  @media (max-width: 768px) {
    .image {
      width: 100%;
      height: 180px;
    }
  }
</style>
