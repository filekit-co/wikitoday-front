<script lang="ts">
  import type { NewsType } from "$lib/types";

  export let data;
</script>

<section>
  <ul class="grid gap-8">
    {#each data.newsList as news}
      <li>
        <a href={news.slug}>{news.title}</a>
        <p>{news.date}</p>
        <p>{news.description}</p>
      </li>
    {/each}
  </ul>
</section>
