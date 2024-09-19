const prompt = require("prompt-sync")()

let vetor = [
   [9, 8, 7], [5, 4, 3]];
let maior = 0;
console.log(vetor);
for (let i = 0; i < vetor.length; i++) {
   for (let j = 0; j < vetor[i].length; j++) {
      if (vetor[i][j] > maior) {
         maior = vetor[i][j];
      }
   }
}
console.log(`O Maior número é ${maior}`)
console.table(vetor)