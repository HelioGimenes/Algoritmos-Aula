const prompt = require("prompt-sync")();

const pessoas = [
    { nome: 'Luffy', idade: 19 },
    { nome: 'Zoro', idade: 21 },
    { nome: 'Nami', idade: 20 },
    { nome: 'Usopp', idade: 19 },
    { nome: 'Sanji', idade: 21 },
    { nome: 'Chopper', idade: 17 },
    { nome: 'Robin', idade: 30 },
    { nome: 'Franky', idade: 36 },
    { nome: 'Brook', idade: 90 },
    { nome: 'Jinbe', idade: 46 },
];

const listaFormatada = pessoas.map(pessoa => {
    return `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`;
});

console.log(listaFormatada);
