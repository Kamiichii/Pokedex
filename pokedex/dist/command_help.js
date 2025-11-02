export async function commandHelp(state) {
    console.log("Welcome to the Pokedex!\nUsage:\n\n");
    for (const val of Object.values(state.commands)) {
        console.log(`${val.name}: ${val.description}`);
    }
}
