<script lang="ts">
  import "../app.css";
  import Header from "@components/organisms/Header.svelte";
  import Navbar from "../components/organisms/Navbar.svelte";
  import CategoryBar from "@components/organisms/CategoryBar.svelte";
</script>

<div
  class="px-4 sm:px-6 md:px-8 font container items-center justify-center mx-auto"
>
  <Header />
  <Navbar />
  <CategoryBar />
  <slot />
</div>

<style>
  .font {
    font-family: "Noto Sans", sans-serif;
  }
</style>
