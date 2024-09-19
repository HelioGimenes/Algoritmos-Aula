const prompt = require("prompt-sync")()

let produtos = [
    { nome: "Bala", preco: 2, categoria: "Doce" },
    { nome: "Picolé", preco: 5, categoria: "Doce" },
    { nome: "Carro", preco: 10000, categoria: "Veículo" },
    { nome: "Casa", preco: 15000, categoria: "Imóvel" },
    { nome: "Celular", preco: 5000, categoria: "Eletrônico" },
];

let produtosCaros = produtos.filter(produtos => produtos.preco > 100);
//console.log(produtosCaros);
console.table(produtosCaros)
