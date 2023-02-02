export default class Personagem {
  nome;
  percentualVida;  

  constructor(nome){
    this.nome = nome;
    this.percentualVida = 100;
  }

  sofreuDano(percentualDano){
    if (this.percentualVida > 0){
      this.percentualVida -= percentualDano;
    }

    if (this.percentualVida <= 0){
      this.percentualVida = 0;
      return console.log(`O personagem ${this.nome} desmaiou.`)
    }

    return console.log(`O personagem ${this.nome} está com ${this.percentualVida}% de Vida.`)
  }

  usouKitMedico(){

    
    if (this.percentualVida >= 100){
      this.percentualVida = 100;
      return console.log(`O personagem ${this.nome} está com a vida cheia`)
    }
    
    if (this.percentualVida < 100){
      this.percentualVida += 10
    }

    return console.log(`O personagem ${this.nome} está com ${this.percentualVida}% de Vida.`)
  }
}