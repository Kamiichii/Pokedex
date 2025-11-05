
import { CLICommand, State } from "./state.js";


export async function commandHelp(state: State){
    console.log("Welcome to the Pokedex!\nUsage:\n\n");
    for(const val of Object.values(state.commands)){
        console.log(`${val.name}: ${val.description}`);
    }
}