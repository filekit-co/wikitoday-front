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

<div class="relative mb-72 lg:mb-96">
  {#each images as { title, src, keywords }, index}
    <div
      class="duration-700 ease-in-out transition-all absolute inset-0 transform translate-x-0 {current ===
      index
        ? 'z-1'
        : ''}"
      data-value={index}
    >
      <div class="flex flex-col w-full sm:h-64 md:h-64 lg:h-80 image-container">
        <img class="w-full h-40 object-cover mb-4" {src} alt={title} />
        <div class="flex-grow">
          {#if current === index}
            <p class="text sm:text-xs md:text-base font-semibold">
              {title}
            </p>
          {/if}
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  @media (max-width: 640px) {
    .text {
      font-size: 12px /* 14px */;
      line-height: 1.25rem /* 20px */;
    }
    .image-container {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }
  }
</style>
