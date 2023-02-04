export default class Juros {
  capitalInicial;
  taxaAplicada;
  tempo;

  constructor(capitalInicial, taxaAplicada, tempo) {
    this.capitalInicial = capitalInicial;
    this.taxaAplicada = taxaAplicada;
    this.tempo = tempo;
  }

  calcularJurosSimples() {
    const jurosSimples = this.capitalInicial * this.taxaAplicada * this.tempo;
    return `RS$ ${jurosSimples.toFixed(2).replace(".", ",")}`;
  }

  calcularJurosCompostos() {
    const jurosComposto = this.capitalInicial * (1 + this.taxaAplicada) ** this.tempo;
    return `R$ ${jurosComposto.toFixed(2).replace(".", ",")}`;
  }
}