const prompt = require("prompt-sync")()

do {
    const nota1 = Number(prompt("Digite a Primeira Nota: "));
    const nota2 = Number(prompt("Digite a Segunda Nota: "));
    const media = (nota1 + nota2) / 2;
    console.log(`O Aluno(a) ficou com Média de ${media} Nesta Matéria.`);

    const outro = Number(prompt(`Calcular a média de outro aluno? Digite (1) Para Sim ou Digite (2) Para Não: `));

    if (outro === 2) {
        console.log(`Programa Finalizado...`);
        break;
    }

    else if (outro !== 1 && outro !== 2) {
        console.log("Opção inválida. Por favor, digite (1) para Sim ou (2) para Não.")
    }

} while (true)











