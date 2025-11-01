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
export function startREPL(currentState) {
    const rl = currentState.interface;
    rl.prompt();
    rl.on("line", (input) => {
        const nInput = cleanInput(input)[0];
        const commandObj = currentState.commands;
        try {
            if (nInput in commandObj) {
                commandObj[nInput].callback(currentState);
            }
            else {
                console.log("Unknown command");
            }
        }
        catch (err) {
            console.log(err);
        }
        ;
    });
}
