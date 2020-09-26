//"use strict";
const root = document.getElementById("root");


fetch("http://192.168.1.148:3000/user.json")
  .then((res) => res.json())
  .then((users) => createList(users))
  .catch(console.error);



  function createList(users) {
    const ul = document.createElement("ul");
    const list = users.map(createListElement);
    ul.append(...list.fi);
    root.append(ul);
  }  
  
  
  function createListElement({id, firstName, lastName, profilePicture}) {
    if (!firstName && !lastName) {
      return;
    }
    const li  = document.createElement("li");
    const img = createProfileImg(profilePicture);
    const h2 = createProfileName(firstName, lastName);
    const btn = document.createElement("button");
    btn.textContent = "Connect";
    li.append(img,h2,btn);
    return li;  
  }

  function createProfileImg(profilePicture) {
    const img = document.createElement("img");
    img.classList.add("profileImg");
    img.setAttribute("src", profilePicture);
    img.onerror = () => img.setAttribute("src", "../assets/images/user_logo.png");
    return img;
  }

  function createProfileName(firstName, lastName) {
      const h2 = document.createElement("h2");
      h2.append(document.createTextNode(firstName + " " + lastName));
      return h2;
  }

