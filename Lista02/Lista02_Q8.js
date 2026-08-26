let quantidade = 0;
let soma = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 3 !== 0) {
    continue;// pesquisei como usa esse bixo no gemini, pq nao sabia o que era
  }

  console.log(i);
  quantidade++;
  soma = soma + i;
}

console.log("Quantidade de múltiplos:", quantidade);
console.log("Soma de todos eles:", soma);
