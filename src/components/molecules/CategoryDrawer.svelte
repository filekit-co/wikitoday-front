<script lang="ts">
  import HamburgerButton from "@components/atoms/HamburgerButton.svelte";
  import { CategoryPages } from "$lib/datas";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  // 드로어 열림 여부를 상태로 관리합니다.
  let isCategoryDrawerOpen = false;

  // "X" 버튼을 클릭했을 때 드로어를 닫는 함수를 정의합니다.
  function closeDrawer() {
    isCategoryDrawerOpen = false;
  }

  async function handleClick(category: string) {
    const lang = $page.params.lang;
    await goto(`/${lang}/section/${category}`);
    window.location.reload();
  }
</script>

<div class="flex">
  <input
    type="checkbox"
    id="drawer-category-toggle"
    class="relative sr-only peer"
    bind:checked={isCategoryDrawerOpen}
  />

  {#if !isCategoryDrawerOpen}
    <label
      for="drawer-category-toggle"
      class="absolute top-3 left-0 inline-block p-4 transition-all duration-500 rounded-lg peer-checked:left-64 cursor-pointer"
    >
      <HamburgerButton />
    </label>
  {/if}
  <div
    class="fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg peer-checked:translate-x-0"
  >
    <button
      class="absolute top-3 right-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4"
      on:click={closeDrawer}
    >
      X
    </button>
    <div class="px-6 py-4 flex-col">
      <h2 class="text-2xl font-bold mb-6">Category</h2>
      {#each CategoryPages as category}
        <button
          on:click={() => handleClick(category)}
          class="block my-6 font-xl"
        >
          {category}
        </button>
      {/each}
    </div>
  </div>
</div>
