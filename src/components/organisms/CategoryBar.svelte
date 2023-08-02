<script lang="ts">
  import { CategoryPages } from "$lib/types";
</script>

<div class=" box-border font-serif">
  <div class="flex justify-evenly items-center">
    {#each CategoryPages as category}
      <button>
        {category.key}
      </button>
    {/each}
  </div>
  <hr class="h-1 my-4 bg-blck border-0 dark:bg-black" />
</div>
