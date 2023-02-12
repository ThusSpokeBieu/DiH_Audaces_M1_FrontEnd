// Função assíncrona
async function soma(a, b) {
  return a + b;
}
soma(1, 2).then((resultado) => console.log(resultado));

// Arrow Function assíncrona
const subtracao = async (a, b) => {
  return a - b;
};
subtracao(3, 2).then((resultado) => console.log(resultado));

// Esperar
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('promise1'), 600);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('promise2'), 1600);
});

(async () => {
  const resultado = await promise1;
  const resultado2 = await promise2;
  console.log(resultado);
  console.log(resultado2);
})();

(async function () {
  const resultado = await promise1;
  const resultado2 = await promise2;
  console.log(resultado);
  console.log(resultado2);
})();

const delay = (ms = 1000) => {
  //   throw new Error('teste erro');
  return new Promise((res, rej) => setTimeout(() => rej({ message: 'saldo disponível' }), ms));
};

(async () => {
  try {
    console.log('Iníciou o processamento');
    const result = await delay();
    console.log(result);
  } catch (err) {
    console.log('Deu Erro:', err.message);
  } finally {
    console.log('Finalizou processamento');
  }
})();

const buscarValorAprovado = async () => {
  return await new Promise((res) =>
    setTimeout(() => res(Math.floor(Math.random() * 9000) + 1000), 2000),
  );
};

const consultaValor = async (valor) => {
  const valorAprovado = await buscarValorAprovado();

  console.log(valor <= valorAprovado ? 'Aprovado' : 'Reprovado');
};

consultaValor(20000);
