export default class Funcionario {
  cpf;
  nomeCompleto;
  salario;
    
  constructor(cpf, nomeCompleto, salario) {
    this.cpf = cpf;
    this.nomeCompleto = nomeCompleto;
    this.salario = salario;
  }

  promover(percentual) {
    this.salario += this.salario * (percentual/100);
  }
  
  validarCPF() {
    function validarCPFRegex(value) {
      let pattern = /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/;
      return pattern.test(value);
    }

    function removerPontosETraços(value) {
      return value.replace(/[.-]/g, "");
    }

    if (!validarCPFRegex(this.cpf)) {
      return console.log('CPF inválido');
    }

    if (removerPontosETraços(this.cpf).length !== 11) {
      return console.log('CPF inválido');
    }

    return console.log('CPF válido');
  }

}
