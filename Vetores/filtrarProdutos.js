const prompt = require("prompt-sync")();

let produtos = [
    { nome: "Bala", preco: 2, categoria: "Doce" },
    { nome: "Picolé", preco: 5, categoria: "Doce" },
    { nome: "Carro", preco: 10000, categoria: "Veículo" },
    { nome: "Casa", preco: 15000, categoria: "Imóvel" },
    { nome: "Celular", preco: 5000, categoria: "Eletrônico" },
    { nome: "Fones de Ouvido", preco: 200, categoria: "Eletrônico" },
    { nome: "TV", preco: 1500, categoria: "Eletrônico" },
    { nome: "Notebook", preco: 3000, categoria: "Eletrônico" },
    { nome: "Camiseta", preco: 30, categoria: "Vestuário" },
    { nome: "Calça", preco: 80, categoria: "Vestuário" }
];

function filtrarPorCategoria(produtos, categoria) {
    return produtos.filter(produto => produto.categoria === categoria);
}

const categoriaFiltrada = "Doce";
const produtosFiltrados = filtrarPorCategoria(produtos, categoriaFiltrada);

console.log("Produtos filtrados por categoria:", produtosFiltrados);
