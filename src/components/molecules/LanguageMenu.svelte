<script lang="ts">
  import LanguageButton from "@components/atoms/LanguageButton.svelte";
  import LanguageDrawer from "./LanguageDrawer.svelte";

  // 드로어 열림 여부를 상태로 관리합니다.
  let isLangDrawerOpen = false;

  // "X" 버튼을 클릭했을 때 드로어를 닫는 함수를 정의합니다.
  function closeLangDrawer() {
    isLangDrawerOpen = false;
  }
</script>

<div class="flex">
  <input
    type="checkbox"
    id="drawer-lang-toggle"
    class="relative sr-only peer"
    bind:checked={isLangDrawerOpen}
  />

  {#if !isLangDrawerOpen}
    <label
      for="drawer-lang-toggle"
      class="absolute top-3 right-0 inline-block p-4 transition-all duration-500 rounded-lg peer-checked:right-64 cursor-pointer"
    >
      <LanguageButton />
    </label>
  {/if}

  <LanguageDrawer on:close={closeLangDrawer} />
</div>
