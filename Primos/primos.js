const prompt = require("prompt-sync")()
const num = Number (prompt("Digite um Número: "))

if (num <= 1) {
    console.log (`${num } Não é número Primo`)
}
else if (num === 2) {
    console.log (`${num } É número Primo`)
}
else if (num === 3) {
    console.log (`${num } É número Primo`)
}
else if (num % 2 === 0) {
    console.log (`${num } Não é número Primo`)
}
else if (num % 3 === 0) {
    console.log (`${num } Não é número Primo`)
}

else {
    console.log (`${num } É número Primo`)
}


