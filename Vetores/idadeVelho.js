const prompt = require("prompt-sync")();

const pessoas = [
    { nome: 'Luffy', idade: 19, profissao: 'Capitão' },
    { nome: 'Zoro', idade: 21, profissao: 'Espadachim' },
    { nome: 'Nami', idade: 20, profissao: 'Navegadora' },
    { nome: 'Usopp', idade: 19, profissao: 'Atirador' },
    { nome: 'Sanji', idade: 21, profissao: 'Cozinheiro' },
    { nome: 'Chopper', idade: 17, profissao: 'Médico' },
    { nome: 'Robin', idade: 30, profissao: 'Arqueóloga' },
    { nome: 'Franky', idade: 36, profissao: 'Construtor' },
    { nome: 'Brook', idade: 90, profissao: 'Músico' },
    { nome: 'Jinbe', idade: 46, profissao: 'Timoneiro' },
];

const pessoaMaisVelha = pessoas.reduce((acumulador, pessoaAtual) => {
    return (acumulador.idade > pessoaAtual.idade) ? acumulador : pessoaAtual;
});

console.log("A pessoa mais velha é:", pessoaMaisVelha);

