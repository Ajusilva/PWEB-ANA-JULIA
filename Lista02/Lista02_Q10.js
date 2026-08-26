
const entradasDoUsuario = [1, 15, 1, 25, 2, 99, 0];

let total = 0;
let opcao;
let i = 0;

do {
  opcao = entradasDoUsuario[i];
  i++;

  switch (opcao) {
    case 1:
      let valor = entradasDoUsuario[i];
      i++;
      total = total + valor;
      console.log("Somado " + valor + " ao total.");
      break;

    case 2:
      console.log("Total acumulado: " + total);
      break;

    case 0:
      console.log("Saindo do programa...");
      break;

    default:
      console.log("Opção inválida: " + opcao);
  }

} while (opcao !== 0);
