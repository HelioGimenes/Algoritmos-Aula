const prompt = require ("prompt-sync")()

let vetor = Number(prompt("Digite o Tamanho do Vetor: "))
let vetorParImpar = []

for (let i=0; i<vetor;i++){
    if (i % 2 ===0){
        vetorParImpar.push("Par");
        }else {
            vetorParImpar.push("Impar")
        }
}
console.log (`Vetor: ` ,vetorParImpar)
