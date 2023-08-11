<script lang="ts">
  import { LanguagePages } from "$lib/datas";
  import { goto } from "$app/navigation";
  import { createEventDispatcher } from "svelte";
  import { page } from "$app/stores";

  const dispatch = createEventDispatcher();
  const candidLanguages = $page.data?.candidLanguages || [];

  async function selectLanguage(lang: string) {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/[^/]+/, `/${lang}`);
    await goto(newPath);
    window.location.reload();
    dispatch("close"); // Drawer를 닫습니다.
  }
</script>

<div
  class="fixed z-10 top-0 right-0 w-64 h-full transition-all duration-500 transform translate-x-full bg-white shadow-lg peer-checked:translate-x-0 overflow-y-auto"
>
  <button
    class="absolute top-3 right-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4"
    on:click={() => dispatch("close")}
  >
    X
  </button>
  <div class="px-6 py-4 flex-col">
    {#each candidLanguages as language}
      {#each LanguagePages as langPage}
        {#if langPage.value === language}
          <button
            class="block my-6 font-3xl"
            on:click={() => selectLanguage(langPage.value)}
          >
            {langPage.key}
          </button>
        {/if}
      {/each}
    {/each}
  </div>
</div>
