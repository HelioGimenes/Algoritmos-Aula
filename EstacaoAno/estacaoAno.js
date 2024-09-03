const prompt = require ("prompt-sync")()
function obterEstacaoDoAno(mes) {
    let estacao;

    switch (mes) {
        case 1: // Janeiro
        case 2: // Fevereiro
        case 12: // Dezembro
            estacao = "Verão";
            break;
        case 3: // Março
        case 4: // Abril
        case 5: // Maio
            estacao = "Primavera";
            break;
        case 6: // Junho
        case 7: // Julho
        case 8: // Agosto
            estacao = "Verão";
            break;
        case 9: // Setembro
        case 10: // Outubro
        case 11: // Novembro
            estacao = "Outono";
            break;
        default:
            estacao = "Mês inválido. Por favor, insira um número de 1 a 12.";
    }

    return estacao;
}

const mes = parseInt(prompt("Digite o número do mês (1 a 12):"));
const estacao = obterEstacaoDoAno(mes);
console.log(`A estação do ano para o mês ${mes} é: ${estacao}`);
