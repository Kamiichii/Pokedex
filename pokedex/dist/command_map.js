export async function commandMap(state) {
    const data = await state.PokeAPI.fetchLocations(state.nextLocationsURL ?? undefined);
    state.nextLocationsURL = data.next;
    state.previousLocationsURL = data.previous;
    for (const r of data.results) {
        console.log(r.name);
    }
    ;
}
export async function commandMapb(state) {
    if (!state.previousLocationsURL) {
        console.log("you're on the first page");
        return;
    }
    const data = await state.PokeAPI.fetchLocations(state.previousLocationsURL);
    state.nextLocationsURL = data.next;
    state.previousLocationsURL = data.previous;
    for (const r of data.results) {
        console.log(r.name);
    }
    ;
}
