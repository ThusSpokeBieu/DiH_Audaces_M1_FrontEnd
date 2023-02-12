function obterClienteNoBancoDeDados(idCliente) {
  return new Promise( (resolve, reject) => {
          const cliente = { nome: 'bruce wayne', id: idCliente };
          resolve(cliente);
          reject(new Error('Houve um erro.'))
  });
}

async function processar() {
  try {
    const cliente = await obterClienteNoBancoDeDados(7);
    console.log(cliente);
  } catch (error) {
    console.error(error);
  }
}

processar();  