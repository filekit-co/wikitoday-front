<script lang="ts">
  import { CategoryPages } from "$lib/types";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  async function handleClick(category: string) {
    const lang = $page.params.lang;
    await goto(`/${lang}/section/${category}`);
    window.location.reload();
  }
</script>

<div class="box-border container">
  <div
    class="grid md:grid-rows-2 md:grid-cols-6 xl:grid-rows-1 xl:grid-cols-12"
  >
    {#each CategoryPages as { key }}
      <button on:click={() => handleClick(key)}>
        {key}
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
