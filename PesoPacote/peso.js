const prompt = require("prompt-sync")()
const peso = Number(prompt("Insira o peso do pacote: "))
const formatoEnvio = prompt ("Forma de Envio: ")
let taxaPeso 
switch (formatoEnvio) {
    case "Padrao":
        taxaPeso = peso * 5
        break
    case "Expresso":
        taxaPeso = peso * 7
        break
    case "Internacional":
        taxaPeso = peso * 10
        break
}

console.log(`O Valor a ser pago é de ${taxaPeso.toFixed(2)}`)