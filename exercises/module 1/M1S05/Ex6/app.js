import Juros from "./Juros.js";

const juros = new Juros(10000, 0.07, 24);
console.log(juros);
console.log("Juros Simples:", juros.calcularJurosSimples());
console.log("Juros Compostos:", juros.calcularJurosCompostos());

console.log(`\n ########################## \n\n\n`)
const juros2 = new Juros(10000, 0.15, 10);
console.log(juros2)
console.log("Juros Simples:", juros2.calcularJurosSimples());
console.log("Juros Compostos:", juros2.calcularJurosCompostos());