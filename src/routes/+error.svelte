<script lang="ts">
  import { page } from "$app/stores";
</script>

<main>
  <div
    class="h-screen w-full flex flex-col justify-center items-center bg-base-900"
  >
    <h1 class="text-9xl font-extrabol text-neutral-700 tracking-widest mb-8">
      {$page.status}
    </h1>
    <div class="bg-accent px-2 text-4xl rounded-full mb-8">
      {$page.error?.message || "Filekit.co"}
    </div>

    <div class="pt-5 join join-vertical md:join-horizontal">
      <a href={`/`} class="join-item btn btn-outline text-6xl"> Go Home </a>
    </div>

    <div class="pt-5 join join-vertical md:join-horizontal">
      <a href={`/`} class="join-item btn btn-outline text-6xl"> Contact Us </a>
    </div>
  </div>
</main>
