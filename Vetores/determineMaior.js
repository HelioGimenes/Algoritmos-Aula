const prompt = require ("prompt-sync")()

let vetor = [1,10,25,90,15,5]
let maior = 0;
console.log(vetor);
for (let i = 0; i < vetor.length; i++) {
   if ( vetor[i] > maior ) {
      maior = vetor[i];
   }
}

console.log(`O Maior número é ${maior}`)