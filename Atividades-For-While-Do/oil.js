const prompt = require("prompt-sync")();

let alcool = 0;
let gasolina = 0;
let diesel = 0;
let codigo;

while (true) {
    codigo = parseInt(prompt("Informe o tipo de combustível (1.Álcool, 2.Gasolina, 3.Diesel, 4.Fim): "));

    if (codigo === 4) {
        console.log("MUITO OBRIGADO");
        console.log(`Álcool: ${alcool}`);
        console.log(`Gasolina: ${gasolina}`);
        console.log(`Diesel: ${diesel}`);
        break;
    }

    switch (codigo) {
        case 1:
            alcool++;
            console.log("Você escolheu: Álcool");
            break;
        case 2:
            gasolina++;
            console.log("Você escolheu: Gasolina");
            break;
        case 3:
            diesel++;
            console.log("Você escolheu: Diesel");
            break;
        default:
            console.log("Código inválido. Tente novamente.");
            break;
    }
}
