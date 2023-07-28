<script lang="ts">
  import { formatDate } from "$lib/utils.js";
  export let data;
</script>

<div class="my-8 mx-6">
  <section class="sm:pt-4 md:pt-7 justify-center items-center">
    <div class="w-full px-6">
      <ul class="grid gap-8 justify-center">
        {#each data.articles as article}
          <li class="bg-white p-4 shadow-md rounded-lg max-w-xl">
            <div class="flex items-center">
              <img
                class="w-64 h-36 object-cover mr-4"
                src={article.image}
                alt={`${article.description}`}
              />

              <article class="flex-grow">
                <h2 class="text-2xl font-bold mb-2">
                  <a href={article.slug}>{article.title}</a>
                </h2>
                <p class="text-gray-500 text-sm mb-2">
                  {formatDate(article.date)}
                </p>
                <p class="text-gray-800">{article.description}</p>
              </article>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </section>
</div>
