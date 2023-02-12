// Exemplo JSON
const jsonString =
  '[{"nome": "teste","idade": 12,"ativo": true,"inadimplente": null},{"nome": "teste","idade": 12,"ativo": true,"inadimplente": null}]';
console.log(jsonString);

// Converte uma string no formato JSON para um tipo JS (object, array)
const jsonConvertidoArray = JSON.parse(jsonString);
console.log(jsonConvertidoArray);
console.log(typeof jsonConvertidoArray);

// Converte um tipo JS (object/array) para o formato JSON
const jsonConvertidoString = JSON.stringify(jsonConvertidoArray);
console.log(typeof jsonConvertidoString);
