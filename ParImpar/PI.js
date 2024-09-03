const prompt = require("prompt-sync")()
const num = Number(prompt("Digite o numero: "));
const resto = num % 2;
if(resto == 0){
    console.log(`O número ${num} é Par.`);
}else{
   console.log(`O número ${num} é Impar.`);
}