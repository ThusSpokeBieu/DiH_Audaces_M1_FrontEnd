class Animal {
  nome;
  idade;
  som;

  constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
  }
}

class Cachorro extends Animal {
  constructor(nome, idade){
    super(nome, idade)
    this.som = 'latido'
  }
}

class Gato extends Animal {
  constructor(nome, idade){
    super(nome, idade)
    this.som = 'miado'
  }
}


export { Cachorro, Gato }