const prompt = require("prompt-sync")()

const cor = prompt("Insira uma Cor: ")
let cores = ["vermelho", "roxo", "preto"];

let mostrar = (cores.indexOf(cor))

if (!cores.includes(cor)) {
    console.log("Cor não encontrada.")

}
else {
    console.log(`A cor escolhida foi:${cor} na Posição ${mostrar}`)
}
