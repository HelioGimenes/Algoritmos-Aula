const prompt = require("prompt-sync")();

let alunos = [
    { nome: "Yanni", nota: 8 },
    { nome: "miro", nota: 6 },
    { nome: "Lucas", nota: 9 },
    { nome: "Biro", nota: 7 },
    { nome: "Antonia", nota: 10 }
];

let Aprovados = alunos.filter(aluno => aluno.nota > 7);

console.log("Alunos aprovados:", Aprovados);
