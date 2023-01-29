window.onload = () => {
  if (!localStorage.getItem("loggedInUser")) {
  confirm("Você precisa está logado para acessar essa página!")
  window.location.replace("./signIn.html");
 }
}

