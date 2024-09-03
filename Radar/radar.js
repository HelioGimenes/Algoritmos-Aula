
const prompt = require("prompt-sync")()

const veloc = Number(prompt("Informe a Velocidade: "))
if (veloc <=80) {
console.log("Está dentro do Limite!")

}
else if ( veloc >=81 && veloc<100){
console.log("Acima do Limite, Multa Leve!")
}  
else {
console.log ("Você está a cima do Limite, Multa Grave!!")
}
