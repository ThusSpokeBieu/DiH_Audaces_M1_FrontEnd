async function getCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  const characters = data.results;
  const list = document.getElementById("character-list");

  characters.forEach(character => {
    const item = document.createElement("li");
    const name = document.createElement("p");
    name.innerText = character.name;
    const image = document.createElement("img");
    image.src = character.image;
    item.appendChild(name);
    item.appendChild(image);
    list?.appendChild(item);
  });
}

getCharacters();
