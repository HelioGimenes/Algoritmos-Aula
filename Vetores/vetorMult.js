const prompt = require("prompt-sync")();
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let matrizMultiplicada = matriz.map(linha => {
    return linha.map(valor => valor * 2);
});

console.log(matrizMultiplicada);
