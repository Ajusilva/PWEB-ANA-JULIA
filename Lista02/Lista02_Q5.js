const a = 10;
const b = 4;
const operacao = "*";

switch (operacao) {
  case "+":
    console.log(a + " + " + b + " = " + (a + b));
    break;
  case "-":
    console.log(a + " - " + b + " = " + (a - b));
    break;
  case "*":
    console.log(a + " * " + b + " = " + (a * b));
    break;
  case "/":
    console.log(a + " / " + b + " = " + (a / b));
    break;
  default:
    console.log("Operação inválida");
}
