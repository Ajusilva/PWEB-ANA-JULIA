let Saque = 280; 

if (Saque <= 0 || Saque % 10 !== 0) {
  console.log("Valor inválido para saque! Informe um valor positivo múltiplo de 10.");
} else {
  console.log(`Valor do saque: R$ ${Saque}`);

  const notas = [100, 50, 20, 10];
  let i = 0;

  while (i < notas.length) {
    let notaAtual = notas[i];


    let resto = Saque % notaAtual;

  
    let quantidadeNotas = (Saque - resto) / notaAtual;

    if (quantidadeNotas > 0) {
      console.log(`${quantidadeNotas} nota(s) de R$ ${notaAtual}`);

      Saque = resto;
    }

    i++;
  }
}