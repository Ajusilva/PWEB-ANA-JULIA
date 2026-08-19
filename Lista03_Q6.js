let N = 10;

let contagemPares = 0;
let soma = 0;

console.log("Números pares:");

for (let i = 1; i <= N; i++) {
  if (i % 2 === 0) {
    contagemPares++;
    soma += i;
    
    console.log(i); 
  }
}

console.log(`Quantidade de pares: ${contagemPares}`); 
console.log(`Soma dos pares: ${soma}`);       