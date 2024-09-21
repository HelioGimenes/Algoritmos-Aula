const prompt = require("prompt-sync")();

let listas = [
    ["Luffy", "Zoro"],
    ["Nami", "Usopp"],
    ["Sanji", "Chopper"],
    ["Robin", "Franky"],
    ["Brook", "Jinbe"],
];

let concatenada = listas.reduce((acumulador, listaAtual) => {
    return acumulador.concat(listaAtual);
}, []);

console.log(concatenada);
