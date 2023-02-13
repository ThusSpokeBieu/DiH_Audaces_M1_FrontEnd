async function getUsers() {
  const response = await fetch("https://randomuser.me/api/?results=4");
  const data = await response.json();
  const users = data.results;
  const userList = document.getElementById("user-list");

  users.forEach(user => {
    const userContainer = document.createElement("div");
    userContainer.classList.add("user");

    const image = document.createElement("img");
    image.src = user.picture.large;
    userContainer.appendChild(image);

    const userInfo = document.createElement("div");
    userInfo.classList.add("user-info");

    const name = document.createElement("h2");
    name.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
    userInfo.appendChild(name);

    const email = document.createElement("p");
    email.innerText = user.email;
    userInfo.appendChild(email);

    const address = document.createElement("p");
    address.innerText = `${user.location.street}, ${user.location.city}, ${user.location.state}, ${user.location.country}`;
    userInfo.appendChild(address);

    userContainer.appendChild(userInfo);
    userList?.appendChild(userContainer);
  });
}

getUsers();