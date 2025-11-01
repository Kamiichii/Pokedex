import * as readline from "readline/promises";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
export function initState() {
    return {
        interface: readline.createInterface({ input: process.stdin, output: process.stdout, prompt: "Pokedex > " }),
        commands: getCommands()
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
        }
    };
}
