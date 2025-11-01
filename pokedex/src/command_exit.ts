import { CLICommand, State } from "./state.js";

export function commandExit(currentState: State){
    console.log("Closing the Pokedex... Goodbye!");
    currentState.interface.close();
    process.exit(0);
}