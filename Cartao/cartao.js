const prompt = require("prompt-sync")()
const numero = (prompt("Coloque seu numero de cartão: "))

const comprimento = numero.length
const num1 = numero.charAt(0)

let valido

switch (true) {

    case (comprimento === 16 && num1 === '4'):
        valido = ("Seu cartao de crédito Visa é Valido ")
        break

    case (comprimento === 16 && num1 === '6'):
        valido = ("Seu cartao de crédito Discover é Valido")
        break

    case (comprimento === 16 && num1 === '5'):
        valido = ("Seu cartao de crédito MasterCard é Valido")
        break

    default:
        valido = "Seu cartão não é Valido"
}

console.log(valido)
