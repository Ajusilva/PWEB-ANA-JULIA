const produtos = [
    { nome: "Teclado", preco: 180, estoque: 4 },
    { nome: "Mouse", preco: 90, estoque: 0 },
    { nome: "Monitor", preco: 1200, estoque: 2 }
   
    ];
console.log(produtos);

let produtosExtra = [
    ...produtos,
    { nome: "CPU", preco: 1000, estoque: 6 }
      
];

console.log(produtosExtra);

const produtosFinal = produtosExtra.filter(p => p.preco > 100);

console.log(produtosFinal);

let precoTotal = produtosFinal.reduce((soma, p) => soma + p.preco, 0);

console.log(precoTotal);
