const prompt = require ("prompt-sync")()
function idadePessoa(idade) {
    let categoria;

    switch (true) {
        case (idade >= 0 && idade <= 12):
            categoria = "Criança";
            break;
        case (idade >= 13 &&  idade <= 17):
           categoria = "Adolescente";
            break;
        case (idade >= 18 && idade <= 64):
          categoria = "Adulto";
            break;
        case (idade >= 65 &&  idade <= 100):
           categoria = "Idoso";
            break;
            default:
            categoria = "Vampiro(a)";
    }

    return categoria;
}

const idade = parseInt(prompt("Digite a idade: "));
let categoria = idadePessoa (idade);
console.log(`A pessoa tem ${idade} anos é um ${categoria}`);