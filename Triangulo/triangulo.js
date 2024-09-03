const prompt = require ("prompt-sync") ()
const lado1 = Number (prompt("Insira o Primeiro Lado: "));
const lado2 = Number (prompt("Insira o Segundo Lado: "));
const lado3 = Number (prompt("Insira o Terceiro Lado: "));



if (lado1 === lado2 && lado2  === lado3) {
    console.log ("O Triangulo é Equilátero. ")
    }
    else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        console.log ("O Triangulo é Isósceles. ");
    }
    else console.log ("O Triangulo é Escaleno. ")






















