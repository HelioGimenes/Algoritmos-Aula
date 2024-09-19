const prompt = require("prompt-sync")()

let numeros = [
    [9, 8, 7], [6, 6, 6], [5, 4, 3]];
let soma = 0

for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length; j++) {
        soma += numeros[i][j];
    }
}
console.log(soma)
