const entradas = ["123", "456", "789"];

const senhaCorreta = "789";

let tentativasRestantes = 3;
let acessoLiberado= false;

let i = 0;

while (tentativasRestantes > 0 && !acessoLiberado && i < entradas.length) {
  let senhaDigitada = entradas[i];
  console.log(`Digite a senha: ${senhaDigitada}`);

  if (senhaDigitada === senhaCorreta) {
    console.log("Acesso permitido");
    acessoLiberado = true;
  } else {
    tentativasRestantes--;
    
    if (tentativasRestantes > 0) {
      console.log("Senha incorreta");
      console.log(`Tentativas restantes: ${tentativasRestantes}`);
    } else {
      console.log("Conta bloqueada");
    }
  }

  i++;
}