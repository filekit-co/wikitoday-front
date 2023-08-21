<script lang="ts">
  import MainPage from "@components/pages/MainPage.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <!-- @ads: native banner -->
  <!-- @ads: native banner -->
  <script
    async
    data-cfasync="false"
    src="//pl20385598.highcpmrevenuegate.com/a2ea6968735f78cd8e133fab7c7aa50b/invoke.js"
  ></script>
  <div id="container-a2ea6968735f78cd8e133fab7c7aa50b" />
  <!-- @ads: banner 160 x 600 -->
  <!-- @ads: banner 160 x 600 -->
  <script type="text/javascript">
    atOptions = {
      key: "ed78bb360e660b9b4141897a284bb560",
      format: "iframe",
      height: 600,
      width: 160,
      params: {},
    };
    document.write(
      "<scr" +
        'ipt type="text/javascript" src="http' +
        (location.protocol === "https:" ? "s" : "") +
        '://www.profitablecreativeformat.com/ed78bb360e660b9b4141897a284bb560/invoke.js"></scr' +
        "ipt>"
    );
  </script>
</svelte:head>

<MainPage
  mainArticles={data.mainArticles}
  opinionArticles={data.opinionArticles}
  cardArticles={data.cardArticles}
/>
