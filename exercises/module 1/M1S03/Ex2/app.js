const buttonElement = document.getElementById("enviar");

const mensagemOla = nome => {
const nomeDigitado = document.getElementById("nome").value;
nome = nomeDigitado; 
let msg = `Olá, ${nome}`
console.log(msg);
document.getElementById("mensagemOi").textContent = msg;
}

buttonElement.addEventListener('click', () => {
    mensagemOla();
})

