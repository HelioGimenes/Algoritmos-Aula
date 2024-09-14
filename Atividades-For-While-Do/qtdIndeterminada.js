const prompt = require ("prompt-sync")()

let numero;

while (true) {
  numero = parseInt(prompt("Digite um número inteiro (0 ou negativo para encerrar): "));

  if (numero <= 0) {
    console.log("Programa encerrado.");
    break;
  }

  switch (numero % 2) {
    case 0:
      console.log("O número é PAR");
      break;
    case 1:
      console.log("O número é ÍMPAR");
      break;
  }
}
