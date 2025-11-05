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
export async function startREPL(state) {
    const rl = state.interface;
    rl.prompt();
    rl.on("line", async (input) => {
        const cInput = cleanInput(input);
        const [cmd, ...args] = cInput;
        try {
            if (cmd in state.commands) {
                await state.commands[cmd].callback(state, ...args);
            }
            else {
                console.log("Unknown command");
            }
        }
        catch (err) {
            console.log(err);
        }
        ;
        rl.prompt();
    });
}
