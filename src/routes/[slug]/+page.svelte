<script lang="ts">
  export let data;
</script>

<div class="prose">
  {@html data.html}
</div>

<!-- @html stylying guide -->
<!-- https://joyofcode.xyz/global-styles-in-sveltekit -->
<style>
  .prose {
    margin: 35px 40px;
    padding: 20px 35px;
    justify-content: center;
    font-family: "Georgia", serif;
  }
  :global(.prose h1) {
    font-size: 38px;
    font-weight: bold;
    margin-bottom: 20px;
    padding-bottom: 30px;
  }
  :global(.prose ul) {
    font-size: 25px;
    font-weight: 600px;
    margin-bottom: 20px;
    padding-bottom: 30px;
  }
  :global(.prose h2) {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    padding-bottom: 30px;
  }
  :global(.prose h3) {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
    padding-bottom: 30px;
  }
  :global(.prose details) {
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
    text-decoration: underline;
    padding-bottom: 30px;
  }

  :global(.prose em) {
    font-size: 20px;
  }
  :global(.prose p) {
    font-size: 18px;
    padding-bottom: 10px;
    text-align: left;
  }
  :global(.prose p img) {
    height: 600px;
    width: 600px;
    object-fit: cover;
    padding-top: 20px;
    text-align: center;
    justify-content: center;
  }
</style>
