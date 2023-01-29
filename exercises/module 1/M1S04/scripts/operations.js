window.onload = () => {
  if (!localStorage.getItem("loggedInUser")) {
  confirm("Você precisa está logado para acessar essa página!")
  window.location.replace("./signIn.html");
 }
}

const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
console.log(loggedUser)

const showButton = document.getElementById("showBal");
const hideButton = document.getElementById("hideBal");
const loggoutButton = document.getElementById("logout");


document.getElementById("nome").innerHTML = loggedUser.name;
document.getElementById("cpf").innerHTML = loggedUser.cpf;
document.getElementById("account").innerHTML = loggedUser.conta;

showButton?.addEventListener("click", () => {
  if(prompt("Insira sua senha:") === loggedUser.senha){
    document.getElementById("balance").innerHTML = loggedUser.saldo
                                                            .toFixed(2)
                                                            .toString()
                                                            .replace(".", ",");
  }else{
    alert("Senha inválida.")
    document.getElementById("balance").innerHTML = "******";
  }
})

hideButton?.addEventListener("click", () => {
  document.getElementById("balance").innerHTML = "******";
})

loggoutButton?.addEventListener("click", () => {
  if(confirm("Tem certeza que quer sair?")){
    localStorage.removeItem("loggedInUser")
    window.location.replace("./signIn.html");
  }
})