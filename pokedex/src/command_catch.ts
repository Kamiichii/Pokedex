import { Console } from "console";
import {State} from "./state.js";




export async function commandCatch(state: State,...args:string[]){
    if (!args[0]){
        console.log("Please enter a valid pokemon name");
        return;
    }
    const pokemonName = args[0].toLocaleLowerCase().trim();
    console.log(`Throwing a Pokeball at ${pokemonName}...`);
    try{ 
    const pokemonInformation = await state.PokeAPI.fetchPokemon(pokemonName);
    const catched = calculateIfCatched(pokemonInformation.base_experience);
    if (catched){
        console.log(`${pokemonName} was caught!`);
        state.pokedex[pokemonName] = pokemonInformation;
    }
    else{
        console.log(`${pokemonName} escaped!`);
    }
    }
    catch{
        console.log(`Couldnt get the information for ${pokemonName}`);
        return;
    }
}

function calculateIfCatched(base_exp:number){
    const minChance = 0.15;
    const maxChance = 0.85;

    // -0.0028 is the slope of the linear function and 0.99 is the bound considering 50 base exp as the min bound and 300 exp as the max bound
    let chance = 0.99 + -0.0028 * base_exp;
    chance = Math.min(maxChance,Math.max(minChance,chance));
    return Math.random() < chance;
 }
