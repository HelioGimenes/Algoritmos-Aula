const prompt = require("prompt-sync")();

const num = Number(prompt("Digite qual Tabuada: "));
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}
