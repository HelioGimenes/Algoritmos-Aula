const prompt = require("prompt-sync")()

/*

let num1 = Number(prompt('Digite o primeiro valor: '));
let num2 = Number(prompt('Digite o segundo valor: '));


while (num2 === 0) {
    console.log('O segundo valor não pode ser ZERO, digite outro valor.');
    num2 = Number(prompt('Digite o segundo valor: '));
}

let resultado = num1 / num2;
console.log(`O resultado da divisão é: ${resultado.toFixed(0)}`);
 
*/


let num1 = Number(prompt('Digite o primeiro valor: '));
let num2 = Number(prompt('Digite o segundo valor: '));


while (num2 === 0) {
console.log ("VALOR INVÁLIDO")
break;
    
}


