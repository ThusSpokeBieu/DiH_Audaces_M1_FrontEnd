const concatena = (lista1, lista2) => {
lista3 = [...lista1, ...lista2];
return lista3
}

const novoArray = concatena([1, 2, 3], [4, 5, 6]);
console.log(novoArray);