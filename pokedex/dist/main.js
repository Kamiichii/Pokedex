import { startREPL } from "./repl.js";
import { initState } from "./state.js";
function main() {
    const firstState = initState();
    startREPL(firstState);
}
main();
