<script lang="ts">
  import { formatDate } from "$lib/utils.js";

  export let data;
</script>

<section>
  <ul class="grid gap-8">
    {#each data.articles as article}
      <li>
        <a href={article.slug}>{article.title}</a>
        <p>{formatDate(article.date)}</p>
        <p>{article.description}</p>
        {@html article.html}
      </li>
    {/each}
  </ul>
</section>
