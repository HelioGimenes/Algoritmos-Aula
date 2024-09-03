const prompt = require ("prompt-sync") ()
const num1 = Number (prompt("Qual o Primeiro Número: "))
const num2 = Number (prompt("Qual o Segundo Número: "))
const num3 = Number (prompt("Qual o Terceiro Número: "))

if (num1 < num2 && num2 < num3) {
    console.log (`Os números ${num1}, ${num2} e ${num3} estão em ordem crescente.`)
} else if (num1 > num2 && num2 > num3) {
    console.log (`Os números ${num1}, ${num2} e ${num3} estão em ordem decrescente.`)
} else {
    console.log (`Os números ${num1}, ${num2} e ${num3} estão desordenados.`)
}




