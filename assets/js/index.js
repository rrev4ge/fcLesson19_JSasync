"use strict";

const root = document.getElementById("root");
const btn = document.getElementById("btn");
const userList = document.createElement("a");
userList.href = "../../user_cards.html";
userList.setAttribute("target","_blank");
userList.textContent = "User list";
root.append(userList);

btn.addEventListener("click", (event) => {
  alert("Alert")
});


// Home work tasks:

logNumTimeout();

delay(5000).then(() => alert("hello"));

function logNumTimeout(num = 1) {
  setTimeout((() => {
    if (num <= 20) {
      console.log(num);
      logNumTimeout(num + 1);
    }
  }), 100);
}

function delay(ms) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
  return promise;
}

// Class room tasks:

setTimeout(logNumInterval, 6000);

function logNumInterval(num = 1) {
  let timerId = setInterval(function () {
    console.log(num);
    if (num === 20) {
      clearInterval(timerId);
    }
    num++;
  }, 100);
}

fetch("../../assets/data/user.json")
  .then((res) => res.json())
  .then((users) => createList(users))
  .catch(console.error);

function createList(users) {
  const ul = document.createElement("ul");
  const list = users.map(createListElement);
  ul.append(...list);
  root.append(ul);
  return ul;
}

function createListElement({ name, isMale, age, description }) {
  const li = document.createElement("ul");
  li.append(document.createTextNode(name + " " + age + " " + isMale + " " + description));
  return li;
}




