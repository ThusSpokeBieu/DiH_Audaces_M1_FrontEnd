if(localStorage.length === 0){
  const DevInBankUsers = [
    {
    name: "Devin House",
    cpf: "000.000.000-00",
    celular: "(00) 99999-9999",
    senha: "adm1n_Dev1n",
    conta: new Date().getTime(),
    saldo: 9999999,
    } 
  ]

  localStorage.setItem("DevInBankUsers", JSON.stringify(DevInBankUsers));
}

console.log(localStorage.getItem("DevInBankUsers"))

const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const cpfInput = document.getElementById("cpf");
const celularInput = document.getElementById("celular");
const saltRounds = 10;

nameInput?.addEventListener("input", () => {
  let name = nameInput.value;
  name = name.replace(/\d/g, "");

  nameInput.value = name;

});

cpfInput?.addEventListener("input", () => {
  let cpf = cpfInput.value;
  cpf = cpf.replace(/[^\d]/g, "");

  if (cpf.length > 11) {
    cpf = cpf.slice(0, 11);
  }

  cpfInput.value = cpf;
});

celularInput?.addEventListener("input", () => {
  let celular = celularInput.value;
  celular = celular.replace(/[^\d]/g, "");

  if (celular.length > 11) {
    celular = celular.slice(0, 11);
  }

  celularInput.value = celular;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputs = document.querySelectorAll("input");

  for (let input of inputs) {
    if (input.value === "") {
      alert("Todos os campos devem ser preenchidos");
      return;
    }
  }

  const password = document.querySelector("#pwd").value;
  const confirmPassword = document.querySelector("#pwd-confirm").value;
  if (password !== confirmPassword) {
    alert("As senhas não coincidem");
    return;
  }

  const cpf = document.querySelector("#cpf").value;
  if (!validateCpf(cpf)) {
    alert("CPF inválido");
    return;
  }

  const celular = document.querySelector("#celular").value;
  if (!validateCelular(celular)) {
    alert("Celular inválido");
    return;
  }

  let re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
  
  if(!re.test(password)){
    alert(`Senha fraca, por favor, insira uma senha com os requisitos: \n - Pelo menos 8 caracteres. \n - Pelo menos um número. \n - Pelo menos um caracter maiusculo. \n - Pelo menos um caracter minusculo. \n - Pelo menos um símbolo. `)
    return 
  }

  
  let newUser = {
    name: nameInput.value,
    cpf: generateCPF(cpfInput.value),
    celular: generateCellphone(celular),
    senha: password,
    conta: new Date().getTime(),
    saldo: 0,
  }

  let users = JSON.parse(localStorage.getItem("DevInBankUsers"));

  if (users.find(u => u.cpf === newUser.cpf)){
    alert(`CPF de número ${newUser.cpf} já foi cadastrado \n \n 
    Por favor verifique se já não possui uma conta.`)
    return;
  }

  users.push(newUser);
  localStorage.setItem("DevInBankUsers", JSON.stringify(users));

  
  form.submit();
  alert(`Parabéns ${newUser.name}, sua conta foi criada. \n
  \n Seu número de conta é ${newUser.conta}, use seu cpf e senha para entrar.`)

});

function validateCpf(cpf) {
   if (new Set(cpf.split("")).size === 1) return false;
   if (cpf.length !== 11) return false;
   return true;
}

function validateCelular(cellphone) {
    cellphone = cellphone.replace(/[^\d]+/g,'');

    if (new Set(cellphone.split("")).size === 1) return false;
    if (cellphone.length !== 11) return false;

    return true;
}

function generateCPF(cpf) {
  cpf = "" + cpf
  cpf = cpf.slice(0, 9) + "-" + cpf.slice(9);
  cpf = cpf.slice(0, 6) + "." + cpf.slice(6);
  cpf = cpf.slice(0, 3) + "." + cpf.slice(3);
  return cpf;
}

function generateCellphone(cellphone) {
  cellphone = "" + cellphone;
  cellphone = "(" + cellphone.slice(0, 2) + ") " + cellphone.slice(2, 7) + "-" + cellphone.slice(7);
  return cellphone;
}

