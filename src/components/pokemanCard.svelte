<!-- Receive a prop of pokemon from index and create card component-->

<script>
import { fade } from "svelte/transition";


export let pokeman;

</script>

<a class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" transition:fade href={`/pokemon/${pokeman.id}`}>
<img class="w-40 h-40" src="{pokeman.image}" alt="{pokeman.name}">
<h2 class="uppercase">{pokeman.id}.{pokeman.name}</h2>
</a>