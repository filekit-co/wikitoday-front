<script lang="ts">
  import "../app.css";
  import Header from "@components/organisms/Header.svelte";
  import Navbar from "../components/organisms/Navbar.svelte";
  import CategoryBar from "@components/organisms/CategoryBar.svelte";
</script>

<div class="sm:px-2 md:px-4 lg:px-48 font">
  <Header />
  <Navbar />
  <CategoryBar />
  <slot />
</div>

<style>
  .font {
    font-family: "Noto Serif KR", serif;
    font-family: "Playfair Display", serif;
  }
</style>
