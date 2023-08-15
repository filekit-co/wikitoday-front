<script lang="ts">
  import { formatDate } from "$lib/utils";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import ArrowImage from "@components/atoms/ArrowImage.svelte";
  import HomeButton from "@components/atoms/HomeButton.svelte";
  import Error from "../../routes/+error.svelte";

  const lang = $page.params.lang;
  let title: string;
  $: title = $page.params.article;
  let category = $page.params.category;

  function goHome() {
    goto(`/${lang}`);
    category = "";
  }

  async function handleClick(category: string) {
    const lang = $page.params.lang;
    await goto(`/${lang}/section/${category}`);
    window.location.reload();
  }

  let clicked = false;
</script>

<div class="flex justify-between items-center">
  <nav class="flex my-4 text-base">
    <ol class="inline-flex items-center space-x-1 md:space-x-3 text-gray-700">
      <li class="inline-flex items-center">
        <button
          on:click={() => goHome()}
          class="text-sm md:text-lg inline-flex items-center font-medium hover:text-black"
        >
          <HomeButton />
          Home
        </button>
      </li>
      {#if category}
        <li>
          <div class="flex items-center">
            <ArrowImage />
            <button
              on:click={() => handleClick(category)}
              class="text-sm md:text-lg ml-1 font-medium text-black"
            >
              {`${category}`}
            </button>
          </div>
        </li>
        {#if title}
          <li>
            <div class="flex items-center">
              <ArrowImage />
              <p class="text-sm md:text-lg ml-1 font-medium text-black">
                {title}
              </p>
            </div>
          </li>
        {/if}
      {:else if title}
        <li>
          <div class="flex items-center">
            <ArrowImage />
            <p class="text-sm md:text-lg ml-1 font-medium text-black">
              {title}
            </p>
          </div>
        </li>
      {/if}
    </ol>
  </nav>
</div>

<hr class="h-px mb-4 bg-gray-200 border-0 dark:bg-gray-700" />
