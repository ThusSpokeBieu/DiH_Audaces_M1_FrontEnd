const fakeTime = () => Math.random() * 10000;

const retornoEmpresa1 = new Promise((resolve) => setTimeout(resolve, fakeTime(), 'Empresa 1'));

const retornoEmpresa2 = new Promise((resolve) => setTimeout(resolve, fakeTime(), 'Empresa 2'));

Promise.race([retornoEmpresa1, retornoEmpresa2])
  .then((result) => {
    console.log(`A empresa vencedora foi: ${result}`);
  });