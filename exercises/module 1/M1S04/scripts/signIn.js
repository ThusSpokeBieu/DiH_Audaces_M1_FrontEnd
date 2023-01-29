window.onload = () => {
  if (localStorage.getItem("loggedInUser")) {
  confirm("Você já está logado!")
  window.location.replace("./operations.html");
 }
}

let users = JSON.parse(localStorage.getItem("DevInBankUsers")) || [];
console.log(users);

let credentialInput = document.getElementById("credential");
let passwordInput = document.getElementById("pwd");
let loginButton = document.querySelector("button[type='submit']");
let signupButton = document.getElementById("btn-signUp");

credentialInput?.addEventListener("input", () => {
  let credential = credentialInput.value;
  credential = credential.replace(/[^\d]/g, "");

  credentialInput.value = credential;
});

loginButton.addEventListener("click", function(event) {
    event.preventDefault();

    let credential = credentialInput.value;
    let password = passwordInput.value;

    let user = users.find(user => {
        return (user.conta == credential || user.cpf == generateCPF(credential)) && user.senha == password;
    });

    if (user) {
        localStorage.setItem("loggedInUser", user.conta);
        confirm("Login realizado com sucesso!")
        window.location.href = "./operations.html";
    } else {
        confirm("Credenciais inválidas. Por favor, verifique seu número de conta ou CPF e sua senha e tente novamente.");
    }
});

signupButton.addEventListener("click", function() {
    window.location.href = "./signUp.html";
});


function generateCPF(cpf) {
  cpf = "" + cpf
  cpf = cpf.slice(0, 9) + "-" + cpf.slice(9);
  cpf = cpf.slice(0, 6) + "." + cpf.slice(6);
  cpf = cpf.slice(0, 3) + "." + cpf.slice(3);
  return cpf;
}