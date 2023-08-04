<script lang="ts">
  export let data;

  const mainArticle = data.articles[0];
  const leftArticle = data.articles[1];
  const rightArticle = data.articles[2];
</script>

<div class="bg-gray-200 mb-6 shadow-md">
  <div class="flex py-4 px-4">
    <div class="w-1/2 image-container mr-8">
      <img
        class="w-full h-full object-cover rounded-tl-2xl rounded-br-2xl"
        src={mainArticle.image}
      />
    </div>

    <div class="w-1/2">
      <h1 class="text-4xl font-bold">{mainArticle.title}</h1>
      <p>{mainArticle.description}</p>
    </div>
  </div>

  <hr class="h-px mx-4 my-4 bg-gray-300 border-0" />

  <div class="flex">
    <div class="flex p-4 w-1/2">
      <div class="w-1/2 mr-8">
        <img
          class="w-full h-full object-cover rounded-tl-2xl rounded-br-2xl"
          src={leftArticle.image}
        />
      </div>

      <div class="w-1/2">
        <h1 class="text-4xl font-bold">{leftArticle.title}</h1>
        <p>{leftArticle.description}</p>
      </div>
    </div>

    <div class="flex p-4 w-1/2">
      <div class="w-1/2 mr-8">
        <img
          class="w-full h-full object-cover rounded-tl-2xl rounded-br-2xl"
          src={rightArticle.image}
        />
      </div>

      <div class="w-1/2">
        <h1 class="text-4xl font-bold">{rightArticle.title}</h1>
        <p>{rightArticle.description}</p>
      </div>
    </div>
  </div>
</div>

<style>
  .image-container {
    height: 286px;
  }
</style>
