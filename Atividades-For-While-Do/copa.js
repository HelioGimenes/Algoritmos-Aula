const prompt = require ("prompt-sync")();

let ano;

do {
  // Solicita ao usuário que digite um ano
  ano = Number(prompt("Digite um ano (ou 0 para sair): "));

  // Verifica se o ano é 0 para encerrar o programa
  if (ano === 0) {
    console.log("Encerrando o programa...");
    break;
  }

  // Verifica se o ano é válido para a Copa do Mundo (após 1930)
  if (ano >= 1930) {
    // Verifica se o ano não é 1942 ou 1946 (Segunda Guerra Mundial)
    if (ano === 1942 || ano === 1946) {
      console.log(`${ano} não foi ano de Copa do Mundo devido à Segunda Guerra Mundial.`);
    }
    // Verifica se o ano é múltiplo de 4 a partir de 1930
    else if ((ano - 1930) % 4 === 0) {
      console.log(`${ano} é ano de Copa do Mundo.`);
    } else {
      console.log(`${ano} não é ano de Copa do Mundo.`);
    }
  } else {
    console.log(`${ano} não é um ano válido para a Copa do Mundo.`);
  }

} while (ano !== 0);
