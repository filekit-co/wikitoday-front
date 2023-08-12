<script lang="ts">
  import CategoryTopArticle from "@components/molecules/CategoryTopArticle.svelte";
  import CategoryMidArticle from "@components/molecules/CategoryMidArticle.svelte";
  import CategoryBottomArticle from "@components/molecules/CategoryBottomArticle.svelte";
  import CategorySubArticle from "@components/molecules/CategorySubArticle.svelte";
  import type { Article } from "$lib/types";
  export let articles: Article[];
</script>

<CategoryTopArticle {articles} />

<div class="my-8">
  <p class="font-semibold text-3xl mb-1">Trend NEWS</p>
  <hr class="h-[2px] bg-blck border-0 dark:bg-black" />
</div>

<CategoryMidArticle {articles} />

<div class="lg:flex gap-8">
  <div class="lg:w-3/4 my-8">
    <p class="font-semibold text-3xl mb-1">Latest NEWS</p>
    <hr class=" mb-4 h-[2px] bg-blck border-0 dark:bg-black" />
    <CategoryBottomArticle {articles} />
  </div>

  <div class="lg:w-1/4 my-8">
    <p class="font-semibold text-3xl mb-1">Hot topic</p>
    <CategorySubArticle {articles} />
  </div>
</div>
