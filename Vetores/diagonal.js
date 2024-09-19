const prompt = require("prompt-sync")()

let n = 3
let matrizVerdadeira = [];
for (let i = 0; i < n; i++) {
    matrizVerdadeira[i] = [];
    for (let j = 0; j < n; j++) {
        if (i === j) {
            matrizVerdadeira[i][j] = 1;
        } else {
            matrizVerdadeira[i][j] = 0;
        }
    }
}
console.log(matrizVerdadeira)
console.table(matrizVerdadeira)