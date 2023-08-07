<script lang="ts">
  import HamburgerButton from "@components/atoms/HamburgerButton.svelte";
  import { category } from "$lib/datas";
  import { CategoryPages } from "$lib/types";
  import { goto } from "$app/navigation";

  // 드로어 열림 여부를 상태로 관리합니다.
  let isCategoryDrawerOpen = false;

  // "X" 버튼을 클릭했을 때 드로어를 닫는 함수를 정의합니다.
  function closeDrawer() {
    isCategoryDrawerOpen = false;
  }

  function handleClick(category: string) {
    goto(`/lang/news/${category}`);
  }
</script>

<div class="flex">
  <input
    type="checkbox"
    id="drawer-category-toggle"
    class="relative sr-only peer"
    bind:checked={isCategoryDrawerOpen}
  />

  <label
    for="drawer-category-toggle"
    class="absolute top-3 left-0 inline-block p-4 transition-all duration-500 rounded-lg peer-checked:left-64 cursor-pointer"
  >
    <HamburgerButton />
  </label>

  <div
    class="fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg peer-checked:translate-x-0"
  >
    <button
      class="absolute top-3 right-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      on:click={closeDrawer}
    >
      X
    </button>
    <div class="px-6 py-4 flex-col">
      <h2 class="text-4xl font-bold mb-4">Category</h2>
      {#each CategoryPages as { key, value }}
        <button
          on:click={() => handleClick(value)}
          class="block my-6 font-semibold font-3xl"
        >
          {key}
        </button>
      {/each}
    </div>
  </div>
</div>
