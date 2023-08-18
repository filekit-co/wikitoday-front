<!-- component -->
<script lang="ts">
  import FacebookLogo from "@components/atoms/FacebookLogo.svelte";
  import GithubLogo from "@components/atoms/GithubLogo.svelte";
  import InstaLogo from "@components/atoms/InstaLogo.svelte";
  import TiktokLogo from "@components/atoms/TiktokLogo.svelte";
  import TwitterLogo from "@components/atoms/TwitterLogo.svelte";
  import YouTubeLogo from "@components/atoms/YouTubeLogo.svelte";
  import GoogleLogo from "@components/atoms/GoogleLogo.svelte";
  import YandexLogo from "@components/atoms/YandexLogo.svelte";
  import BingLogo from "@components/atoms/BingLogo.svelte";
  import { CategoryPages, SNS_MEDIA } from "$lib/datas";
  import { handleClick } from "$lib/utils";
  import { page } from "$app/stores";

  const lang = $page.params.lang;

  interface LogoComponents {
    [key: string]:
      | typeof FacebookLogo
      | typeof InstaLogo
      | typeof TwitterLogo
      | typeof GithubLogo
      | typeof YouTubeLogo
      | typeof TiktokLogo
      | typeof GoogleLogo
      | typeof YandexLogo
      | typeof BingLogo;
  }

  const logoComponents: LogoComponents = {
    Facebook: FacebookLogo,
    Instagram: InstaLogo,
    Twitter: TwitterLogo,
    Github: GithubLogo,
    YouTube: YouTubeLogo,
    Tiktok: TiktokLogo,
    Google: GoogleLogo,
    Yandex: YandexLogo,
    Bing: BingLogo,
  };
</script>

<footer class="pb-8 lg:py-8">
  <div class="w-full space-y-4 lg:space-y-16 mx-auto">
    <div class="lg:flex">
      <div class="lg:w-1/3">
        <div class="w-[150px] h-[150px] mb-4 hidden lg:block">
          <!-- svelte-ignore a11y-img-redundant-alt -->
          <img
            class="w-full h-full object-cover"
            src="./logo.png"
            alt="logo image"
          />
        </div>
        <p class="text-gray-600 italic mb-6 hidden lg:block">
          Explore trending topics with Wikitoday
        </p>

        <ul class="grid grid-rows-2 grid-cols-4 gap-4">
          {#each SNS_MEDIA as sns}
            <li class="flex items-center justify-start">
              <a
                href={sns.href}
                rel="noreferrer"
                target="_blank"
                class="text-gray-600 hover:text-gray-800 transition"
              >
                <span class="sr-only">{sns.key}</span>
                <svelte:component this={logoComponents[sns.key]} />
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <div class="w-full lg:pl-6">
        <div class=" lg:flex gap-8 mt-8 lg:mt-0">
          <div class="lg:w-4/6 flex-grow">
            <p class="font-semibold text-gray-800 mb-4">Category</p>
            <ul class="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {#each CategoryPages as category}
                <li>
                  <button
                    on:click={() => handleClick(category)}
                    class="text-gray-700 hover:text-gray-800 transition"
                  >
                    <span>{category}</span>
                  </button>
                </li>
              {/each}
            </ul>
          </div>

          <div class="w-1/6 mt-8 lg:mt-0">
            <p class="font-semibold text-gray-800 mb-4">Company</p>
            <ul class="space-y-2">
              <li>
                <a
                  href="https://filekit.co"
                  class="text-gray-700 hover:text-gray-800 transition"
                >
                  <span>Filekit</span>
                </a>
              </li>
              <li>
                <a
                  href="https://youtubetomp3.pages.dev"
                  class="text-gray-700 hover:text-gray-800 transition"
                >
                  <span>YouTubetoMP3</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="w-1/6 mt-8 lg:mt-0">
            <p class="font-semibold text-gray-800 mb-4">Legal</p>
            <ul class="space-y-2">
              <li>
                <a
                  href={`/terms`}
                  class="text-gray-700 hover:text-gray-800 transition"
                >
                  <span>Terms</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mt-8">
      <p class="text-sm text-gray-600">
        © 2023. Wikitoday. All rights reserved.
      </p>
    </div>
  </div>
</footer>
