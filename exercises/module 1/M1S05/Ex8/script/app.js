import Usuario from "../model/Usuario.js";

const usuario = new Usuario("Usuário Teste", "usuario@teste.com", "senha123");

console.log(usuario);

let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let authButton = document.getElementById("login");
let message = document.getElementById("message");

authButton?.addEventListener("click", () => {
  if (usuario.autenticar(emailInput?.value, passwordInput?.value)){
    message.innerHTML = `Bem vindo ${usuario.name}! <br> Sua autenticação foi feita com sucesso!`
    return;
  }

  return alert(`Email ou senha inválidas. Use o console para conferir os dados.`)
 })