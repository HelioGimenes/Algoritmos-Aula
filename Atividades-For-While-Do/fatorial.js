const prompt = require("prompt-sync")();

const num = Number(prompt("Digite o Número: "))
let fat = 1
for (let i = 1; i <= num; i++) {
    fat = fat * i
    }
    console.log(`Fatorial de ${num}: ${fat}`)