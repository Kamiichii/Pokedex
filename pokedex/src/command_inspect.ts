import {State} from "./state.js";

export async function commandInspect(state: State,...args:string[]){
    if (!args[0]){
        console.log("Please enter a valid pokemon name");
        return;
    }
    const pokemonName = args[0].toLocaleLowerCase().trim();
    if(pokemonName in state.pokedex){
        const p = state.pokedex[pokemonName];
        console.log(`Name: ${p.name}`);
        console.log(`Height: ${p.height}`);
        console.log(`Weight: ${p.weight}`);
        console.log(`Stats:`);
        for(const stat of p.stats){
            console.log(`  -${stat.stat.name}: ${stat.base_stat}`);
        }
        console.log("Types:");
        for(const type of p.types){
            console.log(`  -${type.type.name}`);
        }
    }
    else{
        console.log("This pokemon is not in your pokedex. Catch this pokemon to add it.");
    }

}
