<script lang="ts">
  import "../app.css";
  import Header from "@components/organisms/Header.svelte";
  import Navbar from "../components/organisms/Navbar.svelte";
  import CategoryBar from "@components/organisms/CategoryBar.svelte";
</script>

<div class="sm:px-4 md:px-4 lg:px-8 xl:px-24 font container">
  <Header />
  <Navbar />
  <CategoryBar />
  <slot />
</div>

<style>
  @media (max-width: 640px) {
    .container {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
  .font {
    font-family: "Noto Serif KR", serif;
    font-family: "Playfair Display", serif;
  }
</style>
