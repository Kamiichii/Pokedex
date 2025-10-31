import * as readline from "readline/promises";
export function cleanInput(input) {
    const pokemonArr = input.split(" ");
    let cleanArr = [];
    for (const pokemon of pokemonArr) {
        if (pokemon.length > 0) {
            cleanArr.push(pokemon.trim().toLowerCase());
        }
    }
    return cleanArr;
}
export function startREPL() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout, prompt: "Pokedex > " });
    rl.prompt();
    rl.on("line", (input) => {
        const cInput = cleanInput(input);
        if (cInput.length === 0) {
            rl.prompt();
        }
        else {
            console.log(`Your command was: ${cInput[0]}`);
        }
        rl.prompt();
    });
}
