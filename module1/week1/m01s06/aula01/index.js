// Código sincrono
function f1() {
  console.log('Função 1');
}

function f2() {
  console.log('Função 2');
}

// f1();
// console.log('teste');
// f2();

//Codigo assincrono
function f3() {
  console.log('Função 3');
}

function f4() {
  console.log('Função 4');
}

console.log('Inicio async');
setTimeout(() => f3(), 1000);
f4();
console.log('Fim async');

// Função simples
function digaOlaPara(nome) {
  console.log(`Olá ${nome}`);
}

digaOlaPara('Maria');
setTimeout(digaOlaPara, 0, 'Ana');
digaOlaPara('Pedro');
setTimeout(digaOlaPara, 1, 'João');

// SetInterval
const repetir = setInterval(() => console.log('Olá'), 1000);

setTimeout(() => clearInterval(repetir), 7000);

// Promise resolvida
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ id: 1, nome: 'Thais' });
  }, 3000);
}).then((resultado) => {
  console.log(resultado);
});

// Promise rejeitada
new Promise((resolve, reject) => {
  setTimeout(() => reject('Erro'), 4000);
})
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((err) => {
    console.log(err);
  });

// Tratar erro no .then
new Promise((resolve, reject) => {
  setTimeout(() => reject('Erro'), 4000);
}).then(
  (res) => {
    console.log('Sucesso!', res);
  },
  (err) => {
    console.log('Erro:', err);
  }
);

new Promise((res, rej) => {
  const num = Math.random();
  console.log(num);
  if (num > 0.5) {
    setTimeout(() => res('Sucesso!'), 3000);
  } else {
    setTimeout(() => rej('Erro!'), 5000);
  }
})
  .then((resultado) => {
    console.log('.then', resultado);
  })
  .catch((erro) => {
    console.log('.catch', erro);
  })
  .finally(() => console.log('Finalizou'));
