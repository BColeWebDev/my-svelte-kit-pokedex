
import { writable } from "svelte/store";

//similar to context api or hooks
export const pokemon = writable([])

//Loading information from pokemon api
const fetchPokemon = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=300"
    const res = await fetch(url);

    const data = await res.json()
    const loadedPokemon = data.results.map((data, index) => {

        return {
            name: data.name,
            id: index + 1,
            // 1 = bulbasaur, 
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        }
    })
    //
    pokemon.set(loadedPokemon)
}
fetchPokemon()