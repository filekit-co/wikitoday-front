<script lang="ts">
  import { formatDate } from "$lib/utils";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import ArrowImage from "@components/atoms/ArrowImage.svelte";
  import HomeButton from "@components/atoms/HomeButton.svelte";

  const lang = $page.params.lang;
  let category = $page.params.category;

  function goHome() {
    goto(`/${lang}`);
    category = "";
  }

  // 오늘의 날짜를 미국식으로 가져오는 코드
  const today = new Date().toString();

  const formattedDate = formatDate(today);
</script>

<div class="flex justify-between items-center">
  <nav class="flex my-4 text-base">
    <ol class="inline-flex items-center space-x-1 md:space-x-3 text-gray-700">
      <li class="inline-flex items-center">
        <button
          on:click={() => goHome()}
          class="text-sm md:text-lg inline-flex items-center font-medium text-black dark:hover:text-gray-400"
        >
          <HomeButton />
          Home
        </button>
      </li>
      {#if category}
        <li>
          <div class="flex items-center">
            <ArrowImage />
            <p class="text-sm md:text-lg ml-1 font-medium text-black">
              Category
            </p>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <ArrowImage />
            <p class="text-sm md:text-lg ml-1 font-medium text-black">
              {`${category}`}
            </p>
          </div>
        </li>
      {/if}
    </ol>
  </nav>
</div>

<hr class="h-px mb-4 bg-gray-200 border-0 dark:bg-gray-700" />
