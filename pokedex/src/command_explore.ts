import {State} from "./state.js";




export async function commandExplore(state: State,...args:string[]){
    const placeName = args[0];
    if(!placeName){
        console.log("Please enter a valid location");
        return;
    } 
    try{
        console.log(`Exploring ${placeName}...`);
         const data = await state.PokeAPI.fetchLocation(placeName);
         console.log("Found Pokemon:");
         for(const r of data.pokemon_encounters) console.log(` - ${r.pokemon.name}`);
    }catch{console.log("Please enter a valid location")
            return;
    };
    

    
}