<script lang="ts">
  import CategoryMenu from "@components/molecules/CategoryMenu.svelte";
  import LanguageMenu from "@components/molecules/LanguageMenu.svelte";
</script>

<div>
  <header class=" px-4 relative">
    <section class="sm:px-3 md:px-4 flex justify-evenly py-6">
      <CategoryMenu />

      <a
        href="/"
        class="font-serif sm:text-4xl sm:font-bold md:text-5xl md:font-extrabold"
      >
        Wikitoday
      </a>

      <LanguageMenu />
    </section>
  </header>
  <hr class="h-px mb-4 bg-gray-200 border-0 dark:bg-gray-700" />
</div>
