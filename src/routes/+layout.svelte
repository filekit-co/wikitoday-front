<script lang="ts">
  import "../app.css";
  import { page } from "$app/stores";
  import Header from "@components/organisms/Header.svelte";
  import Navbar from "../components/organisms/Navbar.svelte";
  import CategoryBar from "@components/organisms/CategoryBar.svelte";
  import BreadCrumbs from "@components/organisms/BreadCrumbs.svelte";
  import Footer from "@components/organisms/Footer.svelte";
</script>

<svelte:head>
  <!-- @ads: popunder -->
  <script
    type="text/javascript"
    src="//pl20385247.highcpmrevenuegate.com/d8/49/da/d849dab39acb34ad7ceef994d713fca7.js"
  ></script>
  <!-- @ads: social bar -->
  <script
    type="text/javascript"
    src="//pl20385564.highcpmrevenuegate.com/da/32/6c/da326c736ee63eda9bfb19290fc9e80a.js"
  ></script>
  <!-- @ads: native banner -->
  <script
    async
    data-cfasync="false"
    src="//pl20385598.highcpmrevenuegate.com/a2ea6968735f78cd8e133fab7c7aa50b/invoke.js"
  ></script>
  <div id="container-a2ea6968735f78cd8e133fab7c7aa50b" />
</svelte:head>

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
    <Footer />
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
