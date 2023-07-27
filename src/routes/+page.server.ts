import type { NewsType } from "$lib/types";

export async function load({fetch}) {
    const response = await fetch('api/news')
    // console.log(response)
    const newsList: NewsType[] = await response.json();
    return {newsList}
}