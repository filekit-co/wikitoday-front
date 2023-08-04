<script lang="ts">
  import type { ImageType } from "$lib/types";

  export let images: ImageType[];

  $: current = 0;
  $: currentImage = images[current];

  export let duration = 4000;

  setInterval(() => {
    current = (current + 1) % images.length;
    currentImage = images[current];
  }, duration);
</script>

<div class="relative mb-72">
  {#each images as { title, src }, index}
    <div
      class="duration-700 ease-in-out transition-all absolute inset-0 transform translate-x-0 {current ===
      index
        ? 'z-20'
        : ''}"
      data-value={index}
    >
      <div class="flex flex-col h-full">
        <img class="w-full h-40 object-cover mb-4" {src} alt={title} />
        <div class="flex-grow">
          {#if current === index}
            <p class="text-xl font-semibold">
              {title}
            </p>
          {/if}
        </div>
      </div>
    </div>
  {/each}
</div>
