<script lang="ts">
  import { page } from "$app/stores";
  import CategoryDrawer from "@components/molecules/CategoryDrawer.svelte";
  import LanguageMenu from "@components/molecules/LanguageMenu.svelte";

  const lang = $page.params.lang;
</script>

<div>
  <header class="relative">
    <section class="flex justify-evenly py-6">
      <CategoryDrawer />

      <div class="text-center">
        <a
          href={`/${lang}`}
          class="text-4xl sm:font-bold md:text-5xl md:font-extrabold"
        >
          Wikitoday
        </a>
        <p class="text-sm sm:text-md md:text-lg text-gray-600 pt-4">
          <em>Explore trending topics with wikitoday</em>
        </p>
      </div>

      <LanguageMenu />
    </section>
  </header>
  <hr class="h-px mb-4 bg-gray-200 border-0 dark:bg-gray-700" />
</div>

<style>
  header a {
    font-family: "Noto Serif KR", serif;
    font-weight: bold;
  }
</style>
