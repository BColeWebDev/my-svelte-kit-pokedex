<script>
	//name export
	import { pokemon } from '../stores/pokestore';
	
import PokemanCard from '../components/pokemanCard.svelte';
	//set subscribe and update function
	// prefix with a dollar sign get data and react to the change
	console.log($pokemon);
	let searchTerm = ""
	let filteredPokemon = []


	//Reactivity 
	//use as a fucntion to any data changed
	$:{
		if(searchTerm){
			//search the pokemon
			// filters through the pokemon and returns the correct one searched 
			filteredPokemon = $pokemon.filter(pokeman => pokeman.name.includes(searchTerm.toLowerCase()))

		}else{
			filteredPokemon = [...$pokemon]
		}
	}

</script>

<svelte:head>
	<title>Svelte Kit Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Svelte Kit Pokemon</h1>
<input class="w-full rounded-md text-lg p-6 uppercase text-center border-2 border-gray-400" bind:value={searchTerm} type="text" placeholder="search pokemon">

<div class="  py-4 grid gap-4 md:grid-cols-2 grid-cols-1">

	{#each  filteredPokemon as pokeman}
		<PokemanCard pokeman={pokeman}/> 
	{/each}
</div>


<style>
</style>
