import Fatura from './Fatura.js';

const melao = new Fatura(123, "Melão", 2, 3);

console.log(melao.obterValorTotal());
console.log(melao.valorTotal);