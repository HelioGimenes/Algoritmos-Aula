const prompt = require ("prompt-sync")();

// Número de linhas
const linhas = 4;  

// Laço externo para cada linha
for (let i = 1; i <= linhas; i++) {
  let linha = '';

  // Adiciona espaços à esquerda
  for (let j = 1; j <= (linhas - i); j++) {
    linha += ' ';
  }

  // Adiciona os asteriscos
  for (let k = 1; k <= (2 * i - 1); k++) {
    linha += '*';
  }

  // Imprime a linha atual
  console.log(linha);
}


/*
Para imprimir um triângulo completo (ou uma pirâmide) de asteriscos com 4 linhas em JavaScript,
você precisará alinhar os asteriscos de forma centralizada. Isso pode ser feito ajustando os espaços
à esquerda de cada linha.

Neste código, o laço interno adiciona os espaços à esquerda para alinhar os asteriscos no centro,
e o segundo laço adiciona o número correto de asteriscos para cada linha. O número de asteriscos
em cada linha segue a fórmula 2*i-1
*/