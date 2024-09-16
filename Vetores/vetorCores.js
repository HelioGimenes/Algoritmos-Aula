const prompt = require("prompt-sync")()

let cor = prompt("Coloque a cor(azul,vermelho,amarelo,verde,preto,branco): ")
let cores = ["azul","vermelho","amarelo","verde","preto","branco"]

let mostrar = (cores.indexOf(cor))

if (mostrar !== -1){
    console.log(`A cor escolhida foi ${cor} e a posição é ${mostrar}`)
    
}
else{
    console.log(`Cor nao encontrada.`)
}








