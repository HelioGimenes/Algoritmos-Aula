const prompt = require("prompt-sync")();


const lado1 = Number(prompt("Insira o Primeiro Lado: "));
const lado2 = Number(prompt("Insira o Segundo Lado: "));
const lado3 = Number(prompt("Insira o Terceiro Lado: "));
const lado4 = Number(prompt("Insira o Quarto Lado: "));


const angulo1 = Number(prompt("Insira o Primeiro Ângulo (em graus): "));
const angulo2 = Number(prompt("Insira o Segundo Ângulo (em graus): "));
const angulo3 = Number(prompt("Insira o Terceiro Ângulo (em graus): "));
const angulo4 = Number(prompt("Insira o Quarto Ângulo (em graus): "));


const somaAngulos = angulo1 + angulo2 + angulo3 + angulo4;

if (lado1 === lado2 && lado2 === lado3 && lado3 === lado4) {
    if (angulo1 === 90 && angulo2 === 90 && angulo3 === 90 && angulo4 === 90) {
        console.log("O Quadrilátero é um Quadrado.");
    } else {
        console.log("O Quadrilátero é um Losango.");
    }
} else if (lado1 === lado3 && lado2 === lado4) {
    if (angulo1 === 90 && angulo2 === 90 && angulo3 === 90 && angulo4 === 90) {
        console.log("O Quadrilátero é um Retângulo.");
    } else {
        console.log("O Quadrilátero é um Paralelogramo.");
    }
} else {
    if (somaAngulos === 360) {
        console.log("É um Quadrilátero Irregular.");
    } else {
        console.log("Os ângulos não somam 360 graus. Verifique as entradas.");
    }
}
