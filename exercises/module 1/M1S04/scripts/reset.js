document.getElementById("btn-reset").addEventListener("click", function() {
  if(confirm("Você tem certeza? Isso vai apagar todas as contas armazenadas, e te fazer sair.")){
    localStorage.clear();
  }
});