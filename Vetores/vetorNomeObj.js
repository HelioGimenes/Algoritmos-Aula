const prompt = require ("prompt-sync")()

const nomes = ['Ana', 'João', 'Pedro'];

let nomesObjeto = nomes.reduce((acumulador, nome) => {
       acumulador[nome] = nome.length;
    return acumulador;
}, {});

console.log(nomesObjeto);
