//"use strict";
const root = document.getElementById("root");
const ul = document.createElement("ul");
root.append(ul);

fetch("http://192.168.1.148:3000/user.json")
  .then((res) => res.json())
  .then((users) => createList(users))
  .catch(console.error)
  .then(fetch("../assets/data/users.json")
    .then((res) => res.json())
    .then((users) => addListElements(users))
    .catch(console.error))
  .catch(console.error);



function addListElements(users) {
  const list = users.map(createListElement).filter(element => element);
  ul.append(...list);
}


function createListElement({ id, firstName, lastName, profilePicture }) {
  if (!firstName && !lastName) {
    return;
  }
  const li = document.createElement("li");
  const img = createProfileLogo(profilePicture);
  const h2 = createProfileName(firstName, lastName);
  const h3 = createProfilePosition();
  const btn = createProfileBtn();
  li.append(img, h2, h3,  btn);
  return li;
}

function createProfileLogo(profilePicture) {
  const img = document.createElement("img");
  img.classList.add("profileImg");
  img.setAttribute("src", profilePicture);
  img.onerror = () => img.setAttribute("src", "../assets/images/user_logo.png");
  return img;
}

function createProfileName(firstName, lastName) {
  const h2 = document.createElement("h2");
  h2.append(document.createTextNode(firstName + " " + lastName));
  h2.classList.add("profileName");
  return h2;
}

function createProfilePosition() {
  const h3 = document.createElement("h3");
  fetch("../assets/data/propositions.json")
    .then((res) => res.json())
    .then((proposition) => h3.textContent = random(proposition))
    .catch(console.error);
    h3.classList.add("profilePosition");
  return h3;
}

function createProfileBtn() {
  const btn = document.createElement("button")
  btn.textContent = "Connect";
  btn.classList.add("profileBtn");
  return btn;
}

function random(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}