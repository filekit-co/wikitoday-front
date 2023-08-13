<script lang="ts">
  import { LanguagePages } from "$lib/datas";
  import { goto } from "$app/navigation";
  import { createEventDispatcher } from "svelte";
  import { page } from "$app/stores";
  import type { LanguageKey } from "$lib/types";

  const dispatch = createEventDispatcher();
  $: candidLanguages = $page.data?.candidLanguages || [];

  async function selectLanguage(lang: LanguageKey) {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/[^/]+/, `/${lang}`);
    await goto(newPath);
    dispatch("close"); // Drawer를 닫습니다.
    window.location.reload();
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
    {#if candidLanguages.length > 0}
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
    {:else}
      {#each LanguagePages as langPage}
        <button
          class="block my-6 font-3xl"
          on:click={() => selectLanguage(langPage.value)}
        >
          {langPage.key}
        </button>
      {/each}
    {/if}
  </div>
</div>
