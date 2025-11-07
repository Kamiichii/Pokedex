import * as readline from "readline/promises";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { PokeAPI } from "./pokeapi.js";
import { commandMap, commandMapb } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";
export function initState() {
    return {
        interface: readline.createInterface({ input: process.stdin, output: process.stdout, prompt: "Pokedex > " }),
        commands: getCommands(),
        PokeAPI: new PokeAPI(1000),
        nextLocationsURL: null,
        previousLocationsURL: null,
        pokedex: {},
    };
}
export function getCommands() {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Prints instructions about how to use the Pokedex",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Prints the next 20 location areas",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Prints the previous 20 location areas",
            callback: commandMapb,
        },
        explore: {
            name: "explore",
            description: "Explores the given area",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "Catches the given pokemon",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect",
            description: "Inspects a pokemon from your pokedex",
            callback: commandInspect,
        },
        pokedex: {
            name: "pokedex",
            description: "Prints the pokemons in your pokedex",
            callback: commandPokedex,
        }
    };
}
