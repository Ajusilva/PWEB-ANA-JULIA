let totalPares = 0;
let totalImpares = 0;

for (let i = 1; i <= 20; i++) {
  let resto = i % 2;

  switch (resto) {
    case 0:
      console.log(i + " é par");
      totalPares++;
      break;
    case 1:
      console.log(i + " é ímpar");
      totalImpares++;
      break;
  }
}

console.log("Pares encontrados:", totalPares);
console.log("Ímpares encontrados:", totalImpares);
