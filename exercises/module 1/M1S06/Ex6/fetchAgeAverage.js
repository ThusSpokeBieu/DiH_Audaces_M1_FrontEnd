async function obterIdadeMedia(nome, pais) {
  const response = await fetch(`https://api.agify.io/?country_id=${pais}&name=${nome}`);
  const dados = await response.json();

  if (dados.age === null) {
    console.error(`Não foi possível encontrar a idade média para o nome "${nome}" no país "${pais}"`);
    return;
  }

  console.log(`O nome "${nome}" tem uma idade média de ${dados.age} anos no país "${pais}"`);
}

obterIdadeMedia('Gabriel', 'BR');