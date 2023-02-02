import Funcionario from './Funcionario.js';

const ada = new Funcionario("528.442.040-31", "Ada Lovelace", 1000);
console.log(ada.salario); // 1000

ada.promover(50);
console.log(ada.salario); // 1500

ada.validarCPF();

const ada1 = new Funcionario("41aswea5488780874", "Ada Lovelace", 1000);
ada1.validarCPF();
