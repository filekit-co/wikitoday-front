<script lang="ts">
  import MainArticles from "@components/molecules/MainArticles.svelte";
  import Opinions from "@components/molecules/Opinions.svelte";
  import CardArticles from "@components/molecules/CardArticles.svelte";
  import type { Article } from "$lib/types";

  export let mainArticles: Article[];
  export let opinionArticles: Article[];
  export let cardArticles: Article[];
</script>

{#if mainArticles.length > 0}
  <div class="md:flex">
    <MainArticles articles={mainArticles} />
    <Opinions articles={opinionArticles} />
  </div>
  <hr class="h-1 my-6 bg-blck border-0 dark:bg-black" />
  <CardArticles articles={cardArticles} />
{:else}
  <div class="flex flex-col items-center justify-center mt-5">
    <em class="text-sm sm:text-lg md:text-2xl text-gray-600 mb-4 line-through">
      No articles available
    </em>
    <img
      src="https://i.giphy.com/media/3orif8b64kZwnaz8A0/giphy.webp"
      class="w-full lg:w-1/2"
      alt="nothing"
    />
  </div>
{/if}
