const prompt = require("prompt-sync")()

let numeros = [
    [1, 2, 3],[4, 5, 6],[7, 8, 9]];
let soma = numeros.map(numeros => numeros + numeros)
console.log (soma)