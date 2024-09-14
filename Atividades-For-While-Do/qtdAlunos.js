const prompt = require("prompt-sync")();

let qtdAlunos = parseInt(prompt("Informe a quantidade de alunos: "));
let somaNotas = 0;
let nota;
let i = 1;

while (i <= qtdAlunos) {
  nota = parseFloat(prompt(`Informe a nota do aluno ${i}: `));

  switch (true) {
    case (nota >= 0 && nota <= 10):
      somaNotas += nota;
      i++;
      break;
    default:
      console.log("Nota inválida. Insira uma nota entre 0 e 10.");
      break;
  }
}

let media = somaNotas / qtdAlunos;
console.log(`A média aritmética das notas é: ${media.toFixed(2)}`);
