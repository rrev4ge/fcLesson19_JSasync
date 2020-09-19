"use strict";

const btn = document.getElementById("btn")

btn.addEventListener("click", (event) => {
  alert("Alert")
})


function logNum(i = 1) {
    if (i === 21) {
      return;
    }
    console.log(i);
    i++;
    setTimeout(logNum(i), 100000000);
}

//logNum();

let timerId;
function logNum () {
    timerId = setTimeout(function() {
      console.log(i);
    }, 1000);
};
    clearTimeout(timerId);
};

// setInterval(()=>{
//   i++;
// },100);

// clearInterval(setIi);


const p1 = new Promise((resolve, reject) => {
  resolve("RESOLVED PROMISE");
});

console.log(p1);

p1.then(
  (string) => {
    console.log("then result: ", string);
    return new Promise((resolve, reject) => {
      resolve(string);
    });
  },
  (err) => {
    console.error(err);
  })
  .then(
    (test) => {
      console.log(test);
    })

fetch("../../user.json")
  .then((res) => res.json())
  .then((users) => createList(users))
  .catch(console.error);


function createList(users) {
  const root = document.getElementById("root");
  const ul = document.createElement("ul");
  let liArray = [];
  for (const user of users) {
    const {
      name,
      isMale,
      age,
      description
    } = user
    const li = document.createElement("ul");
    li.append(document.createTextNode(name + " " + age + " " + isMale + " " + description))
    liArray.push(li);
  }
  ul.append(...liArray);
  root.append(ul);
}  