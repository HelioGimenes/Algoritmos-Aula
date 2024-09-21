const prompt = require ("prompt-sync")()

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

const mediaIdade = pessoas.reduce((acumulador, pessoa,_, array) => {
    return acumulador + pessoa.idade / array.length;
}, 0);

console.log(`A média de idade é: ${mediaIdade.toFixed(1)}`);
