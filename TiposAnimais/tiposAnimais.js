const prompt = require ("prompt-sync")()
function tiposDeAnimais(nome) {
    let especie;

    switch (nome.toLowerCase()) {
        case 'cachorro':
        case 'gato':
        case 'cavalo':
        case 'elefante':
        case 'urso':
            especie = "Mamifero";
            break;
        case 'pato':
        case 'aguia':
        case 'corvo':
        case 'papagaio':
        case 'pinguim':
            especie = "Ave";
            break;
        case 'cobra':
        case 'iguana':
        case 'lagarto':
        case 'jacare':
        case 'tartaruga':
            especie = "Réptil";
            break;
        case 'sapo':
        case 'rã':
        case 'perereca':
        case 'cobra-cega':
        case 'axolote':
            especie = "Anfíbio";
            break;
        case 'lambari':
        case 'traira':
        case 'bagre':
        case 'atum':
        case 'salmao':
            especie = "Peixe";
            break;
        default:
            especie = "Animal Desconhecido d(X.X)b";
    }

    return especie;
}

const tipoAnimal = prompt("Digite o tipo de animal: ");
let especie = tiposDeAnimais(tipoAnimal);
console.log(`O animal ${tipoAnimal} é um ${especie}`);
