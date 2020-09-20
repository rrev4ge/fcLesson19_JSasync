"use strict";

const btn = document.getElementById("btn")

btn.addEventListener("click", (event) => {
  alert("Alert")
})




fetch("../../user.json")
  .then((res) => res.json())
  .then((users) => createList(users))
  .catch(console.error);

function logNumTimeout(num = 1) {
    if(num <= 20) {  
      console.log(num);     
      setTimeout(logNumTimeout(num + 1), 100, );
    }
}
logNumTimeout();
function logNumInterval(num = 1) {
    let timerId = setInterval(function() {
      console.log(num);
      if (num === 20) {
        clearInterval(timerId);
      }
      num++;
    }, 100);
}
logNumInterval();
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