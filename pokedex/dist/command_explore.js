export async function commandExplore(state, ...args) {
    if (!args[0]) {
        console.log("Please enter a valid location");
        return;
    }
    try {
        console.log(`Exploring ${args[0]}...`);
        const data = await state.PokeAPI.fetchLocation(args[0]);
        console.log("Found Pokemon:");
        for (const r of data.pokemon_encounters)
            console.log(` - ${r.pokemon.name}`);
    }
    catch {
        console.log("Please enter a valid location");
        return;
    }
    ;
}
