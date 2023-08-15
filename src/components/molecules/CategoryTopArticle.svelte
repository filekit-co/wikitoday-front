<script lang="ts">
  import type { Article } from "$lib/types";
  import { handleClick, formatDate } from "$lib/utils";

  export let articles: Article[];
</script>

<div class="shadow-xl rounded-3xl">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    on:click={() => handleClick(articles[0].slug)}
    class="rounded-xl lg:flex py-4 px-2 justify-center items-center cursor-pointer duration-300 transform hover:scale-105 hover:shadow-2xl"
  >
    <div class="md:w-full lg:w-1/2 h-[250px] md:h-[450px] mb-4 lg:mb-0 lg:mr-4">
      <img
        class="w-full h-full rounded-2xl"
        src={articles[0].thumbnail}
        alt={articles[0].title}
      />
    </div>

    <div class="w-full lg:w-1/2 flex flex-col p-4 space-y-4">
      <h1
        class="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tighter mb-2"
      >
        {articles[0].title}
      </h1>
      <p
        class="text-sm lg:text-base font-semibold text-gray-600 mb-2 uppercase tracking-wide"
      >
        {articles[0].category}
      </p>
      <p class="text-xs lg:text-sm text-gray-400 mb-2">
        {formatDate(articles[0].date)}
      </p>
      <p class="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
        {articles[0].description}
      </p>
    </div>
  </div>
</div>
