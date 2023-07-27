<script lang="ts">
  import { formatDate } from "$lib/utils.js";
  export let data;
</script>

<div class=" my-8 mx-6">
  <section class="sm:pt-4 md:pt-7 justify-center items-center">
    <div class=" w-full px-6">
      <ul class="grid gap-8">
        {#each data.articles as article}
          <li>
            <div class="flex">
              <article>
                <a href={article.slug}>{article.title}</a>
                <p>{formatDate(article.date)}</p>
                <p>{article.description}</p>
              </article>

              <img
                class="sm:w-40 md:w-64 h-36 object-cover"
                src={article.image}
                alt={`${article.description}`}
              />
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </section>
</div>
