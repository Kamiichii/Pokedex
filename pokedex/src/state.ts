import { createInterface, type Interface } from "readline";
import * as readline from "readline/promises";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { PokeAPI } from "./pokeapi.js";
import { commandMap, commandMapb } from "./command_map.js";
import { commandExplore } from "./command_explore.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State,...args:string[]) => Promise<void>;
};

export type State = {
    commands:Record<string,CLICommand>;
    interface:Interface;
    PokeAPI:PokeAPI;
    nextLocationsURL:string | null;
    previousLocationsURL:string | null;
};

export function initState():State{
    return{
        interface: readline.createInterface({input: process.stdin,output: process.stdout,prompt: "Pokedex > "}),
        commands: getCommands(),
        PokeAPI: new PokeAPI(1000),
        nextLocationsURL:null,
        previousLocationsURL:null,
    };
}

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help:{
        name:"help",
        description:"Prints instructions about how to use the Pokedex",
        callback:commandHelp,
    },
    map:{
      name:"map",
      description:"Prints the next 20 location areas",
      callback:commandMap,
    },
    mapb:{
      name:"mapb",
      description:"Prints the previous 20 location areas",
      callback:commandMapb,
    },
    explore:{
      name:"explore",
      description:"Explores the given area",
      callback:commandExplore,
    }
  };
}