const prompt = require("prompt-sync")()

do {
    let opcoes = Number(prompt(`(1).Álcool - (2).Gasolina - (3).Diesel - (4).Fim: `));
    

    if (opcoes === 4) {
        console.log(`Muito Obrigado`);
        console.log ("1")
        console.log ("2")
        console.log ("3")
        break;
    }

    else if (opcoes !== 1 && opcoes !== 2 && opcoes !== 3 && opcoes !== 4) {
        console.log("Opção inválida, (1).Álcool - (2).Gasolina - (3).Diesel - (4).Fim .")
    }

} while (true)