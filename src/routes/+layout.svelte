<script lang="ts">
  import "../app.css";
  import Header from "@components/organisms/Header.svelte";
  import Navbar from "../components/organisms/Navbar.svelte";
  import CategoryBar from "@components/organisms/CategoryBar.svelte";
</script>

<div class="md:px-48">
  <Header />
  <Navbar />
  <CategoryBar />
  <slot />
</div>
