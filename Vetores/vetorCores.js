const prompt = require("prompt-sync")()

const cor = prompt("Insira uma Cor: ")
let cores = ["vermelho", "roxo", "preto"];

if (!cores.includes(cor)) {
    console.log("Cor não encontrada.")

}
else {
    console.log(`A cor escolhida foi:${cor}`)
}
