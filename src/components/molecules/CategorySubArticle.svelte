<script lang="ts">
  import type { Article } from "$lib/types";
  import { handleClickInCategory } from "$lib/utils";
  import { CATEGORY_HOT_ARTICLES } from "$lib/consts";

  export let articles: Article[];

  // 난수를 발생시켜서 hot topic 기사를 보여준다.
  const cardArticles = articles
    .slice(CATEGORY_HOT_ARTICLES, articles.length)
    .map((article) => ({ article, random: Math.random() }))
    .sort((a, b) => a.random - b.random)
    .slice(0, CATEGORY_HOT_ARTICLES)
    .map((item) => item.article);
</script>

<div class="w-full h-full mt-8">
  {#each cardArticles as article}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      on:click={() => handleClickInCategory(article.slug)}
      class="flex my-4 rounded-xl items-center cursor-pointer transition duration-300 transform hover:scale-105 hover:shadow-2xl"
    >
      <div class="flex-grow">
        <h2 class="font md:text-2xl lg:text-base font-bold mb-4 mr-4">
          {article.title}
        </h2>
      </div>

      <div
        class="w-[80px] h-[80px] md:w-[112px] md:h-[112px] lg:w-[80px] lg:h-[80px] flex-shrink-0 flex justify-end"
      >
        <!-- Set fixed image dimensions and right alignment -->
        <img
          class="w-full h-full object-cover rounded-full"
          src={article.thumbnail}
          alt={article.title}
        />
      </div>
    </div>
    <hr class="h-px bg-gray-500 border-1" />
  {/each}
</div>
