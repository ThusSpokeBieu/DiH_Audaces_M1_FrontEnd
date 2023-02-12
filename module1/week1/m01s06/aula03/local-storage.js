const KEY_TOKEN_USUARIO = 'ktu';

// Gravar um item no local storage
localStorage.setItem(KEY_TOKEN_USUARIO, '123');

// Obter item do local storage
const valor = localStorage.getItem(KEY_TOKEN_USUARIO);
console.log(valor);

// Remover um item do local storage
localStorage.removeItem(KEY_TOKEN_USUARIO);
const valor2 = localStorage.getItem(KEY_TOKEN_USUARIO);
console.log(valor2);

// Remover todas as chaves do local storage
localStorage.clear();

// Armazenar array ou objeto
const aluno = {
  nome: 'João',
  numeroChamada: 12,
};

localStorage.setItem('aluno1', JSON.stringify(aluno));

// Obter array ou objeto
const alunoObtido = JSON.parse(localStorage.getItem('aluno1'));
console.log(alunoObtido);

// Armazenar numero
localStorage.setItem('numero', 1);

// Obter numero
const numeroObtido = parseInt(localStorage.getItem('numero'));
console.log(typeof numeroObtido);
