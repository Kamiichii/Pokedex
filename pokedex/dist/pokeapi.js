export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    constructor() { }
    async fetchLocations(pageURL) {
        const full_url = pageURL ? pageURL : `${PokeAPI.baseURL}/location-area/`;
        const res = await fetch(full_url);
        if (!res.ok)
            throw new Error(`HTTP ${res.status}`);
        const pokeAPIJson = await res.json();
        return { next: pokeAPIJson.next,
            previous: pokeAPIJson.previous,
            results: pokeAPIJson.results
        };
    }
    async fetchLocation(locationName) {
        const full_url = `${PokeAPI.baseURL}/location-area/${locationName}/`;
        const res = await fetch(full_url);
        if (!res.ok)
            throw new Error(`HTTP ${res.status}`);
        const pokeAPIJson = await res.json();
        return { id: pokeAPIJson.id,
            name: pokeAPIJson.name
        };
    }
    ;
}
