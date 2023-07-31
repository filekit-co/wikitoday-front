<script lang="ts">
  import LanguageButton from "@components/atoms/LanguageButton.svelte";
  import { language } from "$lib/datas";

  // 드로어 열림 여부를 상태로 관리합니다.
  let isLangDrawerOpen = false;

  // "X" 버튼을 클릭했을 때 드로어를 닫는 함수를 정의합니다.
  function closeLangDrawer() {
    isLangDrawerOpen = false;
  }

  function toggleLangDrawer() {
    isLangDrawerOpen = !isLangDrawerOpen;
  }

  function selectCategory(lang: string) {
    $language = lang;
    isLangDrawerOpen = false; // Close the drawer after selecting a language
  }
</script>

<div class="flex">
  <input
    type="checkbox"
    id="drawer-toggle"
    class="relative sr-only peer"
    bind:checked={isLangDrawerOpen}
  />

  <label
    for="drawer-toggle"
    class="absolute top-3 right-0 inline-block p-4 transition-all duration-500 rounded-lg peer-checked:right-64"
  >
    <LanguageButton on:click={toggleLangDrawer} />
  </label>

  <div
    class="fixed top-0 right-0 z-20 w-64 h-full transition-all duration-500 transform translate-x-full bg-white shadow-lg peer-checked:translate-x-0"
  >
    <button
      class="absolute top-3 right-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      on:click={closeLangDrawer}
    >
      X
    </button>
    <div class="px-6 py-4 flex-col">
      <h2 class="text-4xl font-bold mb-4">Language</h2>
      <button on:click={() => selectCategory("English")}>English</button>
      <!-- Add more language buttons here as needed -->
    </div>
  </div>
</div>
