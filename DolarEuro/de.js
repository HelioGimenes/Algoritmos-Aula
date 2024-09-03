const prompt  = require("prompt-sync")()
const cash = Number(prompt("Qual o valor: "))
const usd = cash / 5.62
const eur = cash / 6.23




console.log(`O valor de ${cash} em reias equivale em Dollar ${usd.toFixed(2)} e em Euro ${eur.toFixed(2)}`)


