import { Cache } from "./pokecache.js";
export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    #myCache;
    constructor(interval) {
        this.#myCache = new Cache(interval);
    }
    async fetchLocations(pageURL) {
        let cachedData = undefined;
        if (pageURL) {
            cachedData = this.#myCache.get(pageURL);
        }
        if (cachedData) {
            return cachedData;
        }
        const full_url = pageURL ? pageURL : `${PokeAPI.baseURL}/location-area/`;
        const res = await fetch(full_url);
        if (!res.ok)
            throw new Error(`HTTP ${res.status}`);
        const pokeAPIJson = await res.json();
        this.#myCache.add(full_url, pokeAPIJson);
        return pokeAPIJson;
    }
    async fetchLocation(locationName) {
        const key = `location-area:${locationName}`;
        const cachedData = this.#myCache.get(key);
        if (cachedData) {
            return cachedData;
        }
        const full_url = `${PokeAPI.baseURL}/location-area/${locationName}/`;
        const res = await fetch(full_url);
        if (!res.ok)
            throw new Error(`HTTP ${res.status}`);
        const pokeAPIJson = await res.json();
        this.#myCache.add(key, pokeAPIJson);
        return pokeAPIJson;
    }
    ;
}
