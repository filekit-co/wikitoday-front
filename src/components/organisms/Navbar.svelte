<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import CategoryDrawer from "@components/molecules/CategoryDrawer.svelte";
  import LanguageMenu from "@components/molecules/LanguageMenu.svelte";

  const lang = $page.params.lang;

  async function handleClick() {
    await goto(`/${lang}`);
    window.location.reload();
  }
</script>

<div>
  <header class="relative">
    <section class="flex justify-evenly py-6">
      <CategoryDrawer />

      <div class="text-center">
        <button
          on:click={() => handleClick()}
          class="text-4xl sm:font-bold md:text-5xl md:font-extrabold"
        >
          Wikitoday
        </button>
        <p class="text-sm sm:text-md md:text-lg text-gray-600 pt-4">
          <em>Explore trending topics with wikitoday</em>
        </p>
      </div>

      <LanguageMenu />
    </section>
  </header>
</div>

<style>
  header button {
    font-family: "Noto Serif KR", serif;
    font-weight: bold;
  }
</style>
