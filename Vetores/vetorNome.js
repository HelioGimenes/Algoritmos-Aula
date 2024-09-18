const prompt = require("prompt-sync")()

let nome = prompt("Digite um Nome: ")
let vetorNome =["Jr","Cibele","Antonia","Cleonice","Helio","Catiucia","Cristiano","Lucas","Yanni","Mariana"]

let procurar = vetorNome.some(vetorNome => nome == vetorNome)
if (procurar){
    console.log ("ACHEI")
}else {
    console.log ("NÃO ACHEI")
}
