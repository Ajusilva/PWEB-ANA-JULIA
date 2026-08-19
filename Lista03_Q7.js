let nota = 7.5; 

let status = "";

if (nota >= 0 , nota <= 4.9) {
  status = "F"; 
} else if (nota >= 5 , nota <= 6.9) {
  status = "R"; 
} else if (nota >= 7 , nota <= 10) {
  status = "A"; 
} else {
  status = "INVALIDA"; 
}


switch (status) {
  case "A":
    console.log("Aprovado!");
    break;
  case "R":
    console.log("Recuperação.");
    break;
  case "F":
    console.log("Reprovado.");
    break;
  default:
    console.log("Nota inválida! Digite um valor de 0 a 10.");
    break;
}