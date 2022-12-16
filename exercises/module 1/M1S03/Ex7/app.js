
const pessoa = {
    nome: 'Ada',
    idade: 36,
    profissao: 'matemática'
  };

  const desestruturaObjeto = objeto => { 
    let { nome, idade, profissao }  = objeto;
    return `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`
  }

  console.log(desestruturaObjeto(pessoa))