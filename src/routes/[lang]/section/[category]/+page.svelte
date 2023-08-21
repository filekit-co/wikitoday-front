<script lang="ts">
  import type { PageData } from "./$types";
  import CategoryPage from "@components/pages/CategoryPage.svelte";

  export let data: PageData;
</script>

<svelte:head>
  <script type="text/javascript">
    atOptions = {
      key: "83d8b4aa7dfbdbef30f7c137079151d2",
      format: "iframe",
      height: 250,
      width: 300,
      params: {},
    };
    document.write(
      "<scr" +
        'ipt type="text/javascript" src="http' +
        (location.protocol === "https:" ? "s" : "") +
        '://www.profitablecreativeformat.com/83d8b4aa7dfbdbef30f7c137079151d2/invoke.js"></scr' +
        "ipt>"
    );
  </script>
</svelte:head>

<CategoryPage {data} />
