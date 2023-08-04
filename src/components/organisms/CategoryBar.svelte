<script lang="ts">
  import { CategoryPages } from "$lib/types";
  import { goto } from "$app/navigation";

  function handleClick(category: string) {
    // console.log(category);
    goto(`/news/${category}`);
  }
</script>

<div class=" box-border">
  <div class="flex justify-evenly items-center">
    {#each CategoryPages as { key, value }}
      <button on:click={() => handleClick(value)}>
        {key}
      </button>
    {/each}
  </div>
  <hr class="h-1 my-4 bg-blck border-0 dark:bg-black" />
</div>
