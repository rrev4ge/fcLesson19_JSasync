"use strict";

const btn = document.getElementById("btn")

btn.addEventListener("click", (event) => {
  alert("Alert")
})

logNumTimeout();
logNumInterval();

fetch("../../user.json")
  .then((res) => res.json())
  .then((users) => createList(users))
  .catch(console.error);

function logNumTimeout(num = 1) {
    if(num <= 20) {  
      console.log(num);     
      setTimeout(logNumTimeout, 100, num + 1);
    }
}

function logNumInterval(num = 1) {
    let timerId = setInterval(function() {
      console.log(num);
      if (num === 20) {
        clearInterval(timerId);
      }
      num++;
    }, 100);
}

function createList(users) {
  const root = document.getElementById("root");
  const ul = document.createElement("ul");
  const list = users.map(createListElement);
  ul.append(...list);
  root.append(ul);
}  

function createListElement({name, isMale, age, description}) {
  const li = document.createElement("ul");
  li.append(document.createTextNode(name + " " + age + " " + isMale + " " + description));
  return li;
}