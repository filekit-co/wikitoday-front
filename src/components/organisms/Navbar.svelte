<script lang="ts">
  import CategoryMenu from "@components/molecules/CategoryMenu.svelte";
  import LanguageMenu from "@components/molecules/LanguageMenu.svelte";
</script>

<div class=" bg-gray-100">
  <header class=" px-4 relative">
    <section class="sm:px-3 md:px-4 flex justify-evenly py-6">
      <CategoryMenu />

      <a
        href="/"
        class="font-serif sm:text-4xl sm:font-bold md:text-5xl md:font-extrabold"
      >
        Hot Topic NEWS
      </a>

      <LanguageMenu />
    </section>
  </header>
</div>
