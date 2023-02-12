// Promise All
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('promise1'), 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve({ nome: 'promise2' }), 1000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject({ nome: 'promise3' }), 500);
});

// Promise resolvida
Promise.all([promise1, promise2])
  .then((result) => {
    console.log('Sucesso:', result);
  })
  .catch((err) => {
    console.log('Erro:', err);
  });

// // Promise rejeitada
Promise.all([promise1, promise2, promise3])
  .then((result) => {
    console.log('Sucesso:', result);
  })
  .catch((err) => {
    console.log('Erro:', err);
  });

//  Promise Race
// Promise resolvida
Promise.race([promise1, promise2])
  .then((result) => {
    console.log('Sucesso:', result);
  })
  .catch((err) => {
    console.log('Erro:', err);
  });

// // Promise rejeitada
Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log('Sucesso:', result);
  })
  .catch((err) => {
    console.log('Erro:', err);
  });

// Promise AllSettled
Promise.allSettled([promise1, promise2, promise3]).then((result) => {
  console.log(result);
});
