<script lang="ts">
  import { CategoryPages } from "$lib/types";
  import { goto } from "$app/navigation";

  function handleClick(category: string) {
    // console.log(category);
    goto(`/news/${category}`);
  }
</script>

<div class="box-border container">
  <div
    class="grid md:grid-rows-2 md:grid-cols-6 xl:grid-rows-1 xl:grid-cols-12"
  >
    {#each CategoryPages as { key, value }}
      <button on:click={() => handleClick(value)}>
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
