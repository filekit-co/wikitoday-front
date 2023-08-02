<script lang="ts">
  import { goto } from "$app/navigation";
  import { formatDate } from "$lib/utils.js";
  import { category } from "$lib/datas";
  import type { ArticleType } from "$lib/types";
  import Articles from "@components/molecules/Articles.svelte";
  import Opinions from "@components/molecules/Opinions.svelte";
  export let data;

  // 초기 필터링은 여기서 처리합니다.
  let filteredArticles = data.articles;

  // 특정 카테고리 선택 했을 시
  $: if ($category !== "") {
    filteredArticles = data.articles.filter(
      (article) => article.category === $category
    );
  }

  // all category 선택했을 시
  $: if ($category === "") {
    filteredArticles = data.articles;
  }

  function handleClick(article: ArticleType) {
    const lang = article.language;
    const category = article.category;
    const fileName = article.slug;

    //console.log("article is:", fileName);
    // console.log(`/${lang}/news/${category}/${fileName}/${lang}`);

    goto(`/news/${category}/${fileName}/${lang}`);
  }
</script>

<div class="flex">
  <Articles {data} />
  <Opinions {data} />
</div>
