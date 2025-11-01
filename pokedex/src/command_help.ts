import { CLICommand, State } from "./state.js";


export function commandHelp(currentState: State){
    console.log("Welcome to the Pokedex!\nUsage:\n\nhelp: Displays a help message\nexit: Exit the Pokedex");
}