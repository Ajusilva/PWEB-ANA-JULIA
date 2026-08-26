let numero = 6;
let operacao = "+";

switch (operacao) {
  case "+":
    for (let i = 1; i <= 10; i++) {
      console.log(numero + " + " + i + " = " + (numero + i));
    }
    break;
  case "-":
    for (let i = 1; i <= 10; i++) {
      console.log(numero + " - " + i + " = " + (numero - i));
    }
    break;
  case "*":
    for (let i = 1; i <= 10; i++) {
      console.log(numero + " * " + i + " = " + (numero * i));
    }
    break;
  case "/":
    for (let i = 1; i <= 10; i++) {
      console.log(numero + " / " + i + " = " + (numero / i));
    }
    break;
  default:
    console.log("Operação inválida");
}
