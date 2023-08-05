<script lang="ts">
  import CategoryPageMainArticle from "@components/molecules/CategoryPageMainArticle.svelte";
  import CategoryPageSubArticle from "@components/molecules/CategoryPageSubArticle.svelte";
  export let data;

  const mainArticle = data.articles[0];
  const leftArticle = data.articles[1];
  const rightArticle = data.articles[2];
</script>

<div class="bg-gray-200 mb-6 shadow-md">
  <CategoryPageMainArticle {mainArticle} />

  <hr class="h-px mx-4 my-4 bg-gray-300 border-0" />

  <div class="grid grid-cols-2">
    <CategoryPageSubArticle subArticle={leftArticle} />
    <CategoryPageSubArticle subArticle={rightArticle} />
  </div>
</div>
