<script lang="ts">
  import type { PageData } from "./$types";
  import CategoryPage from "@components/pages/CategoryPage.svelte";

  export let data: PageData;
</script>

<svelte:head>
  <!-- @ads: Banner 300x250 -->
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
  <!-- @ads: Banner 160x300 -->
  <script type="text/javascript">
    atOptions = {
      'key' : '7dc41461224cc38eaa213fac48e53287',
      'format' : 'iframe',
      'height' : 300,
      'width' : 160,
      'params' : {}
    };
    document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.profitablecreativeformat.com/7dc41461224cc38eaa213fac48e53287/invoke.js"></scr' + 'ipt>');
  </script>
  <!-- @ads: Banner 468x60 -->
  <script type="text/javascript">
    atOptions = {
      'key' : '0a89ae418c6ec789390c9fe13c885c49',
      'format' : 'iframe',
      'height' : 60,
      'width' : 468,
      'params' : {}
    };
    document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.profitablecreativeformat.com/0a89ae418c6ec789390c9fe13c885c49/invoke.js"></scr' + 'ipt>');
  </script>
</svelte:head>

<CategoryPage {data} />
