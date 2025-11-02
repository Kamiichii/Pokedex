import { json } from "stream/consumers";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const full_url = pageURL ? pageURL:`${PokeAPI.baseURL}/location-area/`;
    const res = await fetch(full_url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const pokeAPIJson:{next:string|null;
        previous:string|null;
        results:{ name: string; url: string }[]} = await res.json();
        
    return {next:pokeAPIJson.next,
            previous:pokeAPIJson.previous,
            results:pokeAPIJson.results
    };

  }

  async fetchLocation(locationName: string): Promise<Location> {
    const full_url = `${PokeAPI.baseURL}/location-area/${locationName}/`;
    const res = await fetch(full_url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const pokeAPIJson:{id:number;name:string} = await res.json();
    return {id:pokeAPIJson.id,
            name:pokeAPIJson.name
    }
    };
  }


export type ShallowLocations = {
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
};

export type Location = {
  id:number;
  name:string;
};