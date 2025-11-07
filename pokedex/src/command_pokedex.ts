import { State } from "./state.js";

export async function commandPokedex(state: State,...args:string[]){
    const pokedexValues = Object.values(state.pokedex)
    if(pokedexValues.length === 0){
        console.log("Your pokedex is empty");
        return;
    }
    console.log("Your Pokedex:");
    for(const pokemon of pokedexValues){
        console.log(`  - ${pokemon.name}`);
    }
}