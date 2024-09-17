const prompt = require("prompt-sync")()

let numeros = [5,7,10,15,35,50];
let soma = 0;

for(let i = 0; i < numeros.length; i++){
    soma += numeros[i]
}
let total = soma / numeros.length
console.log(numeros)
console.log (`A Média total é de: ${total.toFixed(0)}`)