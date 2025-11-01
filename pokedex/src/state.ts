import { createInterface, type Interface } from "readline";
import * as readline from "readline/promises";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};

export type State = {
    commands:Record<string,CLICommand>;
    interface:Interface;
};

export function initState():State{
    return{
        interface: readline.createInterface({input: process.stdin,output: process.stdout,prompt: "Pokedex > "}),
        commands: getCommands()
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
    }
  };
}