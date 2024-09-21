const prompt = require("prompt-sync")();
let matriz = [
    [1, -2, 3],
    [-4, 5, 6],
    [7, -8, 9]
];

let Positivos = matriz.reduce((acumulador, linha) => {
    return acumulador + linha.reduce((somaLinha, numero) => {
        return numero > 0 ? somaLinha + numero : somaLinha;
    }, 0);
}, 0);

console.log("Soma dos valores positivos:", Positivos);
