const prompt = require("prompt-sync")()

const valor1 = Number(prompt("Valor de vendas no primeiro mês: "))
const valor2 = Number(prompt("Valor de vendas no segundo mês: "))
const valor3 = Number(prompt("Valor de vendas no terceiro mês: "))

let valort1 = 0
let valort2 = 0
let valort3 = 0

if (valor1 <= 4999 ) {
    (valort1 = valor1)
}
else if (valor1 >=5000 && valor1 < 9999 ){
  (valort1 = valor1 * (5/100))
}
else {
   (valort1 = valor1 * (10/100))
}

if (valor2 <= 4999 ) {
    (valort2 = valor2 )
}
else if (valor2 >=5000 && valor2 < 9999 ){
    (valort2 = valor2 * (5/100))
}
else {
    (valort2 = valor2 * (10/100))
}
if (valor3 <= 4999 ) {
  (valort3 =  valor3 )
}
else if (valor3 >=5000 && valor3 < 9999 ){
   (valort3 = valor3 * (5/100))
}
else {
    (valort3 = valor3 * (10/100))
}
console.log("valor do mes 1: " + valort1)
console.log("valor do mes 2: " + valort2)
console.log("valor do mes 3: " +valort3)
let total = (valort1 + valort2 + valort3)

console.log("valor bonus em 3 meses: " + total)