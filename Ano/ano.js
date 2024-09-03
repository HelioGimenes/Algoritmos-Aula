const prompt = require("prompt-sync")()
const num = Number(prompt("Digite o numero: "));

const resto = num % 4;
if(resto == 0){
    console.log(`É um ano bissexto ${num}.`);
}else{
    console.log(`Não é um ano bissexto ${num}.`);
}