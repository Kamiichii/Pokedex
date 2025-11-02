
import { State } from "./state.js";




export function cleanInput(input:string):string[]{
    const pokemonArr = input.split(" ");
    let cleanArr = [];
    for(const pokemon of pokemonArr){
        if(pokemon.length > 0){
           cleanArr.push(pokemon.trim().toLowerCase());
        }
    }
    return cleanArr;
}

export async function startREPL(state:State){
    const rl = state.interface;
    rl.prompt();
    rl.on("line",async (input)=>{
        const nInput = cleanInput(input)[0];
        const commandObj = state.commands

        try{
            if(nInput in commandObj){
                await commandObj[nInput].callback(state);
            }
            else{
            console.log("Unknown command");
            }
        }catch(err){console.log(err)};
        
       rl.prompt(); 
    });    
}

