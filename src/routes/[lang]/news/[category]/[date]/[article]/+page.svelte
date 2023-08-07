<script lang="ts">
  import TrendNews from "@components/molecules/TrendNews.svelte";
  import Header from "@components/organisms/Header.svelte";
  export let data;

  const { article } = data;
</script>

<Header />

<div class="max-w-3xl mx-auto">
  <article class="container relative pt-10">
    {@html article.html}
  </article>
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
    display: flex; /* 이미지를 중앙에 정렬하기 위해 */
    justify-content: center; /* 가로 중앙 정렬 */
    align-items: center; /* 세로 중앙 정렬 */
    max-width: 100%; /* 컨테이너의 최대 너비 설정 */
  }

  :global(.container .image-container img) {
    max-width: 100%; /* 이미지 너비가 컨테이너 너비를 초과하지 않도록 */
    height: auto; /* 이미지 비율 유지 */
    display: block; /* 블록 레벨 요소로 설정 */
  }

  :global(.container .image-container figcaption) {
    position: absolute;
    bottom: 0; /* 이미지 하단에 정렬 */
    right: 0; /* 이미지 우측에 정렬 */
    width: auto; /* 텍스트의 너비에 맞추기 */
    text-align: right; /* 텍스트를 오른쪽으로 정렬 */
  }

  :global(.container .image-container h4) {
    color: gray; /* 회색 텍스트 */
    margin: 0; /* 여백 제거 */
    padding: 5px; /* 적절한 패딩 추가 */
    background-color: rgba(255, 255, 255, 0.6); /* 배경색 추가, 선택 사항 */
  }

  :global(.container .faq) {
    border: 1px solid #f0f0f0;
    background-color: white;
    border-radius: 1rem;
    display: block;
    divide-y: solid;
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

  :global(.container .body p) {
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
