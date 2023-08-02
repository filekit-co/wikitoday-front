<script lang="ts">
  import LeftMoveButton from "@components/atoms/LeftMoveButton.svelte";
  import RightMoveButton from "@components/atoms/RightMoveButton.svelte";

  export let data;
</script>

<div class="w-1/3 font-serif pl-4">
  <h2 class="text-2xl font-semibold text-gray-300 mb-4">Opinion</h2>

  <!-- carosel -->

  <div
    id="controls-carousel"
    class="relative w-full bg-red-200"
    data-carousel="static"
  >
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <!-- Item 1 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="/docs/images/carousel/carousel-1.svg"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
    </div>
    <!-- Slider controls -->
    <LeftMoveButton />
    <RightMoveButton />
  </div>
</div>
