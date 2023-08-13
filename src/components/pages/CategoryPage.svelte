<script lang="ts">
  import { page } from "$app/stores";
  import CategoryTopArticle from "@components/molecules/CategoryTopArticle.svelte";
  import CategoryMidArticle from "@components/molecules/CategoryMidArticle.svelte";
  import CategoryBottomArticle from "@components/molecules/CategoryBottomArticle.svelte";
  import CategorySubArticle from "@components/molecules/CategorySubArticle.svelte";
  import type { Article } from "$lib/types";
  import Pagination from "@components/molecules/Pagination.svelte";
  export let articles: Article[];

  let pageArticles: Article[];

  $: skip = Number($page.url.searchParams.get("skip")) || 0;
  $: limit = Number($page.url.searchParams.get("limit")) || 10;
</script>

<!-- <div>
  {skip}
  {limit}
</div> -->

<!-- todo: pagination with server -->
<!-- <Pagination {articles} /> -->

<!-- 최상단의 3개의 기사 -->
<CategoryTopArticle {articles} />

<div class="my-8">
  <p class="font-semibold text-3xl mb-1">Trend NEWS</p>
  <hr class="h-[2px] bg-blck border-0 dark:bg-black" />
</div>

<!-- Trend news -->
<!-- 3개의 기사 보여주는 컴포넌트 -->
<CategoryMidArticle {articles} />

<div class="lg:flex gap-8">
  <!-- 카테고리에 해당하는 메인 기사 보여주는 컴포넌트 -->
  <div class="lg:w-3/4 my-8">
    <p class="font-semibold text-3xl mb-1">Latest NEWS</p>
    <hr class=" mb-4 h-[2px] bg-blck border-0 dark:bg-black" />
    <CategoryBottomArticle {articles} />
  </div>

  <!-- hot topic news -->
  <!-- 난수 발생시켜서 임의의 기사 보여줌 -->
  <div class="lg:w-1/4 my-8">
    <p class="font-semibold text-3xl mb-1">Hot topic</p>
    <CategorySubArticle {articles} />
  </div>
</div>

<Pagination {articles} />
