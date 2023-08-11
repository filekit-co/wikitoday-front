<script lang="ts">
  import { onDestroy } from "svelte";
  import type { CaroselType } from "$lib/types";

  export let caroselData: CaroselType[];
  export let duration = 4000;

  $: current = 0;

  const intervalId = setInterval(() => {
    current = (current + 1) % caroselData.length;
  }, duration);

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

<div class="relative">
  {#each caroselData as { title, src, slug }, index}
    {#if current === index}
      <a
        href={slug}
        class="duration-700 ease-in-out transition-all relative z-1"
      >
        <div class="w-full aspect-ratio-[16/9] md:aspect-ratio-[4/3]">
          <img class="w-full object-cover mb-4 rounded-2xl" {src} alt={title} />
        </div>
        <p class="text-sm md:text-base font-semibold">
          {title.length > 100 ? title.slice(0, 100) + "..." : title}
        </p>
      </a>
    {/if}
  {/each}
</div>
