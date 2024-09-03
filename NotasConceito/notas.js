const prompt = require("prompt-sync")()

const nota = Number(prompt("Digite a Nota:"));
if (nota >= 9) {
    console.log (`A`)
}
else if (nota >= 7 && nota < 9) {
    console.log (`B`)
}
else if (nota >=5 && nota < 7) {
    console.log (`C`)
}
else if (nota >= 3 && nota < 5) {
    console.log (`D`)
}
else {
    console.log (`E`)
}

