const prompt = require ("prompt-sync")()

const cor = prompt("Insira uma Cor: ")
let cores = ["vermelho", "roxo", "preto"];

console.log (cores.includes(cor))