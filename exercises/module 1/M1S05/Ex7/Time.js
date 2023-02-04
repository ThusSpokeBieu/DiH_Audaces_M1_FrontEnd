export default class Time {
  #nome;
  #sigla;
  #vitorias;
  #derrotas;
  #empates;
  #golsMarcados;
  #golsSofridos;

  constructor(nome, sigla) {
    this.#nome = nome;
    this.#sigla = sigla;
    this.#vitorias = 0;
    this.#derrotas = 0;
    this.#empates = 0;
    this.#golsMarcados = 0;
    this.#golsSofridos = 0;
  }
  
  get numeroDeJogos(){
    return this.#vitorias + this.#derrotas + this.#empates;
  }

  get numeroDePontos(){
    return (3*this.#vitorias) + this.#empates;
  }

  
  computarPartida(partida) {
    if (partida.siglaTimeA === this.#sigla) {
      this.#golsMarcados += partida.golsTimeA;
      this.#golsSofridos += partida.golsTimeB;
      if (partida.golsTimeA > partida.golsTimeB) {
        this.#vitorias++;
      } else if (partida.golsTimeA < partida.golsTimeB) {
        this.#derrotas++;
      } else {
        this.#empates++;
      }
    } else if (partida.siglaTimeB === this.#sigla) {
      this.#golsMarcados += partida.golsTimeB;
      this.#golsSofridos += partida.golsTimeA;
      if (partida.golsTimeB > partida.golsTimeA) {
        this.#vitorias++;
      } else if (partida.golsTimeB < partida.golsTimeA) {
        this.#derrotas++;
      } else {
        this.#empates++;
      }
    }
  }

  exibirSituacao() {
    console.log(`
      Nome: ${this.#nome}
      Sigla: ${this.#sigla}
      Vitórias: ${this.#vitorias}
      Derrotas: ${this.#derrotas}
      Empates: ${this.#empates}
      Gols Marcados: ${this.#golsMarcados}
      Gols Sofridos: ${this.#golsSofridos}
      Número de Jogos: ${this.numeroDeJogos}
      Número de Pontos: ${this.numeroDePontos}
    `);
  }
}