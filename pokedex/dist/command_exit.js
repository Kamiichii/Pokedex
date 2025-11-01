export function commandExit(currentState) {
    console.log("Closing the Pokedex... Goodbye!");
    currentState.interface.close();
    process.exit(0);
}
