<script lang="ts">
  import { CategoryPages } from "$lib/types";
</script>

<div class="w-full">
  <div class="flex justify-evenly items-center">
    {#each CategoryPages as category}
      <button>
        {category.key}
      </button>
    {/each}
  </div>
  <hr class="h-1 my-4 bg-gray-200 border-0 dark: bg-black" />
</div>
