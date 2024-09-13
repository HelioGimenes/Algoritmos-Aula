const prompt = require("prompt-sync")();

/*
const num = Number(prompt("Digite um Número: "))
const num1 = Number(prompt("Digite um Número: "))
const num2 = Number(prompt("Digite um Número: "))
const num3 = Number(prompt("Digite um Número: "))
const num4 = Number(prompt("Digite um Número: "))
const num5 = Number(prompt("Digite um Número: "))
const num6 = Number(prompt("Digite um Número: "))
const num7 = Number(prompt("Digite um Número: "))
const num8 = Number(prompt("Digite um Número: "))
const num9 = Number(prompt("Digite um Número: "))

const total = (num+num1+num2+num3+num4+num5+num6+num7+num8+num9)/10

console.log (`A Média Aritmética dos Números é: ${total.toFixed(0)}`)

*/

let soma = 0;

for (let i = 0; i < 10; i++) {
  const num = Number(prompt(`Digite o número ${i + 1}: `));
  soma += num;
}

const media = soma / 10;
console.log(`A Média Aritmética dos Números é: ${media.toFixed(0)}`);

