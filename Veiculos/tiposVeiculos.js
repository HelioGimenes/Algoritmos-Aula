const prompt = require("prompt-sync")();

function subMenuCarros() {
    console.log("\nModelos de Carros:");
    console.log("1 - Gol 1.0");
    console.log("2 - Fiat Uno");
    console.log("3 - Chevrolet Onix");
    const escolhaCarro = prompt("Escolha um modelo de carro: ");

    switch (escolhaCarro) {
        case '1':
            console.log('Gol 1.0');
            console.log('Marca Volkswagen');
            console.log('Peso = 2.5 toneladas');
            console.log('Tanque = 30 litros');
            console.log('Valor = R$ 36.000,00');
            break;
        case '2':
            console.log('Fiat Uno');
            console.log('Marca Fiat');
            console.log('Peso = 1.0 tonelada');
            console.log('Tanque = 35 litros');
            console.log('Valor = R$ 28.000,00');
            break;
        case '3':
            console.log('Chevrolet Onix');
            console.log('Marca Chevrolet');
            console.log('Peso = 1.2 toneladas');
            console.log('Tanque = 40 litros');
            console.log('Valor = R$ 50.000,00');
            break;
        default:
            console.log("Escolha uma opção válida.");
    }
}

function subMenuMotos() {
    console.log("\nModelos de Motos:");
    console.log("1 - Honda FAN 150");
    console.log("2 - Yamaha YBR 125");
    console.log("3 - Suzuki GSR 150");
    const escolhaMoto = prompt("Escolha um modelo de moto: ");

    switch (escolhaMoto) {
        case '1':
            console.log('Honda FAN 150');
            console.log('Marca Honda');
            console.log('Peso = 125 kg');
            console.log('Tanque = 16 litros');
            console.log('Valor = R$ 9.000,00');
            break;
        case '2':
            console.log('Yamaha YBR 125');
            console.log('Marca Yamaha');
            console.log('Peso = 110 kg');
            console.log('Tanque = 13 litros');
            console.log('Valor = R$ 8.000,00');
            break;
        case '3':
            console.log('Suzuki GSR 150');
            console.log('Marca Suzuki');
            console.log('Peso = 130 kg');
            console.log('Tanque = 14 litros');
            console.log('Valor = R$ 8.500,00');
            break;
        default:
            console.log("Escolha uma opção válida.");
    }
}

function tiposVeiculos(veiculos) {
    switch (veiculos) {
        case '1':
            subMenuCarros();
            break;
        case '2':
            subMenuMotos();
            break;
        default:
            console.log("Escolha uma opção válida.");
    }
}

console.log("Opções:");
console.log("1 - Carros");
console.log("2 - Motos");
const veiculos = prompt("Digite (1)Carros ou (2)Motos: ");
tiposVeiculos(veiculos);
















