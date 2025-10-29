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