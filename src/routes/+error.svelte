<script lang="ts">
  import { page } from "$app/stores";
</script>

<main>
  <div class="h-screen w-full flex justify-center items-center bg-base-900">
    <div class="w-[500px] h-[500px]">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        class="w-full h-full object-cover"
        src="/error_image.png"
        alt="error image"
      />
    </div>

    <div class="flex-col">
      <h1 class="text-9xl font-extrabol text-neutral-700 tracking-widest mb-8">
        {$page.status}
      </h1>
      <div class="bg-accent px-2 text-4xl rounded-full mb-8">
        {$page.error?.message || "wikitoday.io"}
      </div>

      <div class="pt-5 join join-vertical md:join-horizontal">
        <a href={`/`} class="join-item btn btn-outline text-6xl"> Go Home </a>
      </div>

      <div class="pt-5 join join-vertical md:join-horizontal">
        <a href="/" class="join-item btn btn-outline text-6xl"> Contact Us </a>
      </div>
    </div>
  </div>
</main>
