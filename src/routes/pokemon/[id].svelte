<!-- Route for pokemon -->
<!-- Display Server Side Rendering (SSR) -->
<script context="module" >
    
    //look at route call load function before renderm to page 
    // Runs this query to grab api data to display pokemon information
    export async function load({page}){
        //retriving id of page
        const id = page.params.id;
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const res = await fetch(url);
        const pokeman = await res.json()
        return{props: {pokeman}}


    }
</script>
<script>
    export let pokeman;
    const type = pokeman.types[0].type.name;
</script>
<svelte:head>
	<title>Pokedex - {pokeman.name}</title>
</svelte:head>

<div class="flex flex-col items-center">

    <h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>
    <p>Type: <strong>{type}</strong> | Height: <strong>{pokeman.height}</strong>
        | Weight: <strong>{pokeman.weight}</strong>
    </p>
    <img class="card-image" src={pokeman.sprites['front_default']} 
    alt={pokeman.name}
    />
</div>