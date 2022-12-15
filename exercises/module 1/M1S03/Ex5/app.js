const somaTudo = (...numbers) => numbers.reduce((result, toSum) => result + toSum, 0);

const resultado = somaTudo(1, 2, 3, 4);
console.log(resultado);