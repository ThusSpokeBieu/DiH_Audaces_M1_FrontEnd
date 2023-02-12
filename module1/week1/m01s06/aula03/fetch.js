// Usando async/await
// const buscarDados = async () => {
//   const url = 'http://swapi.dev/api/people';

//   try {
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: new Headers({
//         // 'Content-Type': 'application/json',
//       }),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       console.log(data.results);
//     }
//   } catch (error) {
//     console.error('Erro:', error);
//   }
// };

// buscarDados();

// const buscarDadosPromise = () => {
//   const url = 'http://swapi.dev/api/people';

//   fetch(url, {
//     method: 'GET',
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data.results))
//     .catch((error) => console.error('Erro:', error));
// };

// buscarDadosPromise();

// Metodo post
const cadastrarPost = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const post = { title: 'foo', body: 'bar', userId: 1 };

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });

  const data = await response.json();
  console.log(data);
};
cadastrarPost();

// Metodo delete
const deletarPost = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts/1';

  const response = await fetch(url, {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });

  const data = await response.json();
  console.log(data);
};
deletarPost();
