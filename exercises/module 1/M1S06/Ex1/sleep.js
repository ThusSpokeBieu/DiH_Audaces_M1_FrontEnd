function sleep(valor) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(valor);
    }, 3000);
  });
}

sleep(5)
  .then((value) => {
    console.log(`O valor retornado é: ${value}`);
  })
  .catch((error) => {
    console.error(error);
  });
