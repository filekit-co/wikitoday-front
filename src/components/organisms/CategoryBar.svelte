<script lang="ts">
  import { CategoryPages } from "$lib/types";
  import { language } from "$lib/datas";
  import { goto } from "$app/navigation";

  async function handleClick(category: string) {
    const currentPath = window.location.pathname;

    if (currentPath.length === 1) {
      goto(`/${$language}/news/${category}`);
    } else {
      const lang = window.location.pathname;
      goto(`${lang}/news/${category}`);
    }
  }
</script>

<div class="box-border container">
  <div
    class="grid md:grid-rows-2 md:grid-cols-6 xl:grid-rows-1 xl:grid-cols-12"
  >
    {#each CategoryPages as category}
      <button on:click={() => handleClick(category)}>
        {category}
      </button>
    {/each}
  </div>
  <hr class="h-1 my-4 bg-blck border-0 dark:bg-black" />
</div>

<style>
  @media (max-width: 760px) {
    .container {
      display: none;
    }
  }
</style>
