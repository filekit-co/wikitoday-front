<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import type { Article } from "$lib/types";

  export let articles: Article[];
  export let totalArticleSize: number;

  let pageSize = 10;
  $: totalItems = articles.length;
  $: totalPages = Math.ceil(totalArticleSize / pageSize);
  $: currentPage = (Number($page.url.searchParams.get("skip")) || 0) / pageSize;

  async function handleClick(limit: number, skip: number) {
    await goto(`?limit=${limit}&skip=${skip}`);
    window.location.reload();
  }
  function handlePrevClick() {
    const targetPage = (currentPage - 1 + totalPages) % totalPages;
    handleClick(pageSize, pageSize * targetPage);
  }

  function handleNextClick() {
    handleClick(pageSize, pageSize * ((currentPage + 1) % totalPages));
  }
</script>

<div class="flex items-center justify-between bg-white pb-10">
  <div class="flex flex-1 justify-between sm:hidden">
    <button
      on:click={handlePrevClick}
      class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >Previous</button
    >
    <button
      on:click={handleNextClick}
      class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >Next</button
    >
  </div>
  <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
    <div>
      <p class="text-sm text-gray-700">
        Showing
        <span class="font-medium">1</span>
        to
        <span class="font-medium">10</span>
        of
        <span class="font-medium">{`${totalArticleSize}`}</span>
        results
      </p>
    </div>
    <div>
      <nav
        class="isolate inline-flex -space-x-px rounded-md shadow-sm"
        aria-label="Pagination"
      >
        <button
          on:click={handlePrevClick}
          class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <span class="sr-only">Previous</span>
          <svg
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->

        {#each Array(totalPages).fill(null) as _, i}
          <button
            on:click={() => handleClick(pageSize, pageSize * i)}
            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            class:text-blue-600={currentPage === i}
            class:text-gray-800={currentPage !== i}>{i + 1}</button
          >
        {/each}

        <button
          on:click={handleNextClick}
          class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <span class="sr-only">Next</span>
          <svg
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </nav>
    </div>
  </div>
</div>
