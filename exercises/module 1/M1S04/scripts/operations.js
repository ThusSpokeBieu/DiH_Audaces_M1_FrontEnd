window.onload = () => {
  if (!localStorage.getItem("loggedInUser")) {
  confirm("Você precisa está logado para acessar essa página!")
  window.location.replace("./signIn.html");
 }
}

const users = JSON.parse(localStorage.getItem("DevInBankUsers"));
const login = Number(localStorage.getItem("loggedInUser"))

const index = users.findIndex(user => user.conta === login);
console.log(users)

const showButton = document.getElementById("showBal");
const hideButton = document.getElementById("hideBal");
const loggoutButton = document.getElementById("logout");

document.getElementById("nome").innerHTML = users[index].name;
document.getElementById("cpf").innerHTML = users[index].cpf;
document.getElementById("account").innerHTML = users[index].conta;

showButton?.addEventListener("click", () => {
  if(prompt("Insira sua senha:") === users[index].senha){
    document.getElementById("balance").innerHTML = users[index].saldo
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

const depositValue = document.getElementById("depositValue");
const depositPwd = document.getElementById("depositPwd");
const depositButton = document.getElementById("enviarDeposito");

depositValue?.addEventListener("input", () => {
  depositValue.value = Number(depositValue.value).toFixed(2)
  if(depositValue.value > 1000) depositValue.value = 1000;
})

depositButton?.addEventListener("click", () => {
  if (depositPwd.value !== users[index].senha){
    alert("Senha inválida");
    return
  }

  if(confirm(`Tem certeza que você quer depositar R$ ${depositValue.value}?`)){
    users[index].saldo = Number(users[index].saldo) + Number(depositValue.value);
    localStorage.setItem("DevInBankUsers", JSON.stringify(users));
  }
})

const withdrawValue = document.getElementById("withdrawValue");
const withdrawPwd = document.getElementById("withdrawPwd");
const withdrawButton = document.getElementById("enviarSaque");

withdrawValue?.addEventListener("input", () => {
  withdrawValue.value = Number(withdrawValue.value).toFixed(2)
  if(withdrawValue.value > 1000) withdrawValue.value = 1000;
})

withdrawButton?.addEventListener("click", () => {
  if (withdrawPwd.value !== users[index].senha){
    alert("Senha inválida");
    return
  }

  if(confirm(`Tem certeza que você quer sacar R$ ${withdrawValue.value}?`)){
    if(Number(users[index].saldo) < Number(withdrawValue.value)){
      alert("Saldo insuficiente")
      return
    }

    users[index].saldo =  Number(users[index].saldo) - Number(withdrawValue.value);
    localStorage.setItem("DevInBankUsers", JSON.stringify(users));
  }
})


const transferValue = document.getElementById("transferValue");
const transferPwd = document.getElementById("transferPwd");
const transferButton = document.getElementById("enviarTransferencia");
const transferAccount = document.getElementById("transferAccount");

transferAccount?.addEventListener("input", () => {
  let formatedAccount = transferAccount.value;
  formatedAccount = formatedAccount.replace(/[^\d]/g, "");

  transferAccount.value = formatedAccount;
});

transferValue?.addEventListener("input", () => {
  transferValue.value = Number(transferValue.value).toFixed(2)
  if(transferValue.value > 1000) transferValue.value = 1000;
})

transferButton?.addEventListener("click", () => {
  
  //isso aqui tá funcionando e eu n entendi n
  if(users.findIndex(user => user.conta === Number(transferAccount.value))){
    alert("Número de conta para transferência inválida.")
    return
  }

  const transferIndex = users.findIndex(user => user.conta === Number(transferAccount.value));

  if (transferPwd.value !== users[index].senha){
    alert("Senha inválida");
    return
  }

  if(confirm(`Tem certeza que você quer transferir R$ ${transferValue.value} para:
      \n \n ${users[transferIndex].name} do CPF ${users[transferIndex].cpf}?`)){
    if(Number(users[index].saldo) < Number(transferValue.value)){
      alert("Saldo insuficiente")
      return
    }

    users[index].saldo =  Number(users[index].saldo) - Number(transferValue.value);
    users[transferIndex].saldo =  Number(users[transferIndex].saldo) + Number(transferValue.value);
    localStorage.setItem("DevInBankUsers", JSON.stringify(users));
  }
})