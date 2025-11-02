
import { CLICommand, State } from "./state.js";
import { PokeAPI } from "./pokeapi.js";

export async function commandMap(state:State){
    const data = await state.PokeAPI.fetchLocations(state.nextLocationsURL ?? undefined);
    state.nextLocationsURL= data.next;
    state.previousLocationsURL = data.previous;
    for(const r of data.results){console.log(r.name)};
}
export async function commandMapb(state:State) {
    if(!state.previousLocationsURL){
        console.log("you're on the first page");
        return;
    }
    const data = await state.PokeAPI.fetchLocations(state.previousLocationsURL);
    state.nextLocationsURL=data.next;
    state.previousLocationsURL=data.previous;
    for(const r of data.results){console.log(r.name)};
}