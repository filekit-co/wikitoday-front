<script lang="ts">
  import { goto } from "$app/navigation";
  import { formatDate } from "$lib/utils.js";
  export let data;

  interface ArticleType {
    author: string;
    category: string;
    date: string;
    description: string;
    html: string;
    image: string;
    language: string;
    slug: string;
    title: string;
  }

  function handleClick(article: ArticleType) {
    // console.log(article);
    const lang = article.language;
    const category = article.category;
    // console.log(article);
    const articleTitle = article.slug.slice(0, article.slug.lastIndexOf("."));

    goto(`/${lang}/news/${category}/${articleTitle}`);
  }
</script>

<div class="my-8 mx-6 font-serif">
  <section class="sm:pt-4 md:pt-7 justify-center items-center">
    <div class="w-full px-6">
      <ul class="grid gap-8 justify-center">
        {#each data.articles as article}
          <li class="bg-white p-4 shadow-md rounded-lg max-w-3xl">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
              class="flex items-center"
              on:click={() => handleClick(article)}
            >
              <article class="flex-grow">
                <h2 class="text-3xl font-bold mb-2">
                  <!-- <a href={article.slug}>{article.title}</a> -->
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
