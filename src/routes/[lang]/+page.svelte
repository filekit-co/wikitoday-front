<script lang="ts">
  import MainPage from "@components/pages/MainPage.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <script type="text/javascript">
    atOptions = {
      key: "0a89ae418c6ec789390c9fe13c885c49",
      format: "iframe",
      height: 60,
      width: 468,
      params: {},
    };
    document.write(
      "<scr" +
        'ipt type="text/javascript" src="http' +
        (location.protocol === "https:" ? "s" : "") +
        '://www.profitablecreativeformat.com/0a89ae418c6ec789390c9fe13c885c49/invoke.js"></scr' +
        "ipt>"
    );
  </script>
  <script
    type="text/javascript"
    src="//pl20385247.highcpmrevenuegate.com/d8/49/da/d849dab39acb34ad7ceef994d713fca7.js"
  ></script>
  <script
    type="text/javascript"
    src="//pl20385564.highcpmrevenuegate.com/da/32/6c/da326c736ee63eda9bfb19290fc9e80a.js"
  ></script>
</svelte:head>

<MainPage
  mainArticles={data.mainArticles}
  opinionArticles={data.opinionArticles}
  cardArticles={data.cardArticles}
/>
