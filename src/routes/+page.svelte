<script lang="ts">
  import { goto } from "$app/navigation";
  import { formatDate } from "$lib/utils.js";
  import { category } from "$lib/datas";
  import type { ArticleType } from "$lib/types";
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

<div class="my-8 mx-6 font-serif">
  <section class="sm:pt-4 md:pt-7 justify-center items-center">
    <div class="w-full px-6">
      <ul class="grid gap-8 justify-center">
        {#each filteredArticles as article}
          <li class="bg-white p-4 shadow-md rounded-lg max-w-3xl">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
              class="flex items-center"
              on:click={() => handleClick(article)}
            >
              <article class="flex-grow">
                <h2 class="text-3xl font-bold mb-2">
                  {article.title}
                </h2>
                <p class="text-gray-500 text-sm mb-2">
                  {formatDate(article.date)}
                </p>
                <p class="text-gray-500 text-sm mb-2">
                  {article.category}
                </p>
                <span class="text-gray-800 text-lg">{article.description}</span>
              </article>

              <div class="w-96 h-60 ml-6">
                <img
                  class="w-full h-full object-cover"
                  src={article.image}
                  alt={`${article.description}`}
                />
              </div>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </section>
</div>
