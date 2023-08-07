<script lang="ts">
  import "../app.css";
  import Header from "@components/organisms/Header.svelte";
  import Navbar from "../components/organisms/Navbar.svelte";
  import CategoryBar from "@components/organisms/CategoryBar.svelte";
</script>

<div
  class="sm:px-4 md:px-4 lg:px-4 xl:px-0 font container items-center justify-center mx-auto"
>
  <Header />
  <Navbar />
  <CategoryBar />
  <slot />
</div>

<style>
  /* @media (max-width: 640px) {
    .container {
      padding-left: 16px;
      padding-right: 16px;
    }
  } */
  .font {
    font-family: "Noto Sans", sans-serif;
  }
</style>
