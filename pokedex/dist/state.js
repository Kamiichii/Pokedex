import * as readline from "readline/promises";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { PokeAPI } from "./pokeapi.js";
import { commandMap, commandMapb } from "./command_map.js";
export function initState() {
    return {
        interface: readline.createInterface({ input: process.stdin, output: process.stdout, prompt: "Pokedex > " }),
        commands: getCommands(),
        PokeAPI: new PokeAPI(),
        nextLocationsURL: null,
        previousLocationsURL: null,
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
        }
    };
}
