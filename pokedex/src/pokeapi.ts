import { json } from "stream/consumers";
import { Cache } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  #myCache:Cache;

  constructor(interval:number) {
    this.#myCache = new Cache(interval);
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    let cachedData: ShallowLocations | undefined = undefined;

    if(pageURL){
      cachedData =  this.#myCache.get<ShallowLocations>(pageURL);
    }
    if(cachedData){
      return cachedData;
    }

    const full_url = pageURL ? pageURL:`${PokeAPI.baseURL}/location-area/`;
    const res = await fetch(full_url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const pokeAPIJson:ShallowLocations = await res.json();
    this.#myCache.add<ShallowLocations>(full_url,pokeAPIJson);

    return pokeAPIJson;

  }

  async fetchLocation(locationName: string): Promise<Location> {
    const key = `location-area:${locationName}`;
    const cachedData =  this.#myCache.get<Location>(key);

    if(cachedData){
      return cachedData;
    }

    const full_url = `${PokeAPI.baseURL}/location-area/${locationName}/`;
    const res = await fetch(full_url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const pokeAPIJson:Location = await res.json();
    this.#myCache.add<Location>(key,pokeAPIJson);

    return pokeAPIJson;
    };

    async fetchPokemon(pokemonName:string): Promise<PokemonType>{
      const key = `PokemonName:${pokemonName}`;
      const cachedData =  this.#myCache.get<PokemonType>(key);

      if(cachedData){
      return cachedData;
    }

      const full_url = `${PokeAPI.baseURL}/pokemon/${pokemonName}/`;
      const res = await fetch(full_url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const pokeAPIJson:PokemonType = await res.json();
      this.#myCache.add<PokemonType>(key,pokeAPIJson);
      
      return pokeAPIJson;
    }
  }

   


export type ShallowLocations = {
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
};

export type Location = {
  id:number;
  name:string;
  pokemon_encounters: Array<{ pokemon: { name: string; url: string } }>

  };

export type PokemonType ={
    id:number;
    name:string;
    base_experience:number;
    height:number;
    weight:number;
}
