<script lang="ts">
  import "../app.css";
  import Header from "@components/organisms/Header.svelte";
  import Navbar from "../components/organisms/Navbar.svelte";
  import CategoryBar from "@components/organisms/CategoryBar.svelte";
  import { page } from "$app/stores";
  import BreadCrumbs from "@components/organisms/BreadCrumbs.svelte";
</script>

{#if $page.error}
  <slot />
{:else}
  <div
    class="px-4 sm:px-6 md:px-8 font NavContainer items-center justify-center mx-auto"
  >
    <Header />
    <Navbar />
    <BreadCrumbs />
    <CategoryBar />
    <slot />
  </div>
{/if}

<style>
  .font {
    font-family: "Noto Sans", sans-serif;
  }
  .NavContainer {
    width: 100%;
  }
  @media (min-width: 640px) {
    .NavContainer {
      max-width: 640px;
    }
  }
  @media (min-width: 768px) {
    .NavContainer {
      max-width: 768px;
    }
  }
  @media (min-width: 1024px) {
    .NavContainer {
      max-width: 1024px;
    }
  }
  @media (min-width: 1280px) {
    .NavContainer {
      max-width: 1280px;
    }
  }
  @media (min-width: 1536px) {
    .NavContainer {
      max-width: 1536px;
    }
  }
</style>
