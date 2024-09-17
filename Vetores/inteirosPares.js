const prompt = require("prompt-sync")()

const vetorOriginal = [5,10,15,20,25,30,35,40,45,50];

const vetorPares = vetorOriginal.filter(numero => numero % 2 === 0);

console.log("Vetor original:", vetorOriginal);
console.log("Vetor de números pares:", vetorPares);


