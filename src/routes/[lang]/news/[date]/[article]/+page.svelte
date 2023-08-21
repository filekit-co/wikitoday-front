<script lang="ts">
  import TrendingNews from "@components/molecules/TrendingNews.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <script
    async
    data-cfasync="false"
    src="//pl20385598.highcpmrevenuegate.com/a2ea6968735f78cd8e133fab7c7aa50b/invoke.js"
  ></script>
</svelte:head>

<div class="max-w-3xl mx-auto">
  <article class="container relative pt-10">
    {@html data.articleHtml}
  </article>
  <div id="container-a2ea6968735f78cd8e133fab7c7aa50b" />
  <hr
    class="mt-6 mb-3 md:mt-10 md:mb-5 lg:mt-16 lg:mb-5 bg-black border-3 dark:bg-black"
  />
  <TrendingNews articles={data.randomArticles} />
</div>

<!-- @html stylying guide -->
<!-- https://joyofcode.xyz/global-styles-in-sveltekit -->

<style>
  :global(.container h1) {
    font-size: clamp(var(--font-16), 4vw, var(--font-24));
    line-height: clamp(48px, 6vw, 64px);
    text-align: center;
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 20px;
    text-transform: capitalize;
  }
  :global(.container blockquote) {
    padding: 20px;
    margin: 20px 0;
    border-left: 5px solid #a9a9a9; /* 회색 테두리 */
    background-color: #f5f5f5; /* 연한 회색 배경 */
    position: relative;
    font-style: italic;
    color: #333; /* 어두운 회색 글씨 */
  }

  :global(.container blockquote::before) {
    content: "“";
    font-size: 40px;
    position: absolute;
    left: 0px;
    top: 0;
    color: #a9a9a9; /* 회색 따옴표 */
    font-family: "Noto Serif KR", serif;
  }

  :global(.container blockquote p) {
    margin: 0;
    padding: 0;
    font-size: 18px;
    line-height: 1.5;
  }
  :global(.container .article-hr) {
    height: 1px;
    margin: 22px 4px; /* 위 아래 여백 설정 */
    background-color: #e5e7eb;
    border: 0; /* 테두리 없음 */
  }

  :global(.container .image-container) {
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%; /* 컨테이너의 최대 너비 설정 */
    padding-top: 15px;
    padding-bottom: 15px;
  }

  :global(.container .image-container img) {
    display: block;
    width: 100%; /* 이미지가 컨테이너의 너비를 채우도록 */
    height: auto; /* 원래 비율 유지 */
    border-radius: 1rem;
  }

  :global(.container .image-container figcaption) {
    position: absolute;
    right: 0;
    bottom: 15px;
    background: rgba(255, 255, 255, 0.6);
    padding: 5px;
  }

  :global(.container .image-container h4) {
    color: gray; /* 회색 텍스트 */
  }

  :global(.container .faq) {
    border: 1px solid #f0f0f0;
    background-color: white;
    border-radius: 1rem;
    display: block;
  }

  :global(.container .faq details) {
    padding: 1.5rem;
  }

  :global(.container .faq details summary) {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: space-between;
    gap: 0.375rem;
    color: #2c2c2c;
  }

  :global(.container .faq details summary h2) {
    font-size: 1.125rem;
    font-weight: 500;
  }

  :global(.container .faq details summary span) {
    position: relative;
    height: 1.25rem;
    width: 1.25rem;
    flex-shrink: 0;
  }

  :global(.container .faq details summary span svg) {
    position: absolute;
    inset: 0;
    height: 1.25rem;
    width: 1.25rem;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
  }

  :global(.container .faq details summary span svg.opacity-100) {
    opacity: 1;
  }

  :global(.container .faq details summary span svg.opacity-0) {
    opacity: 0;
  }

  :global(.container .faq details .group-open:opacity-0) {
    opacity: 0;
  }

  :global(.container .faq details .group-open:opacity-100) {
    opacity: 1;
  }

  :global(.container .faq details p) {
    margin-top: 1rem;
    line-height: 1.75rem;
    color: #4a4a4a;
  }

  :global(.container .faq .icon) {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  :global(.container .faq details[open] .icon-closed) {
    opacity: 0;
  }

  :global(.container .faq details:not([open]) .icon-open) {
    opacity: 0;
  }

  :global(.container .faq details[open] .icon-open) {
    opacity: 1;
  }

  :global(.container .faq details:not([open]) .icon-closed) {
    opacity: 1;
  }

  :global(.container .article-body p) {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  :global(.container .datetime) {
    font-size: 18px;
    margin-top: 16px;
    margin-bottom: 16px;
    line-height: 1.4;
    text-align: center;
  }

  :global(.container .datetime em) {
    font-size: 18px;
    font-weight: 500;
    color: #d8d8d8;
  }
</style>
