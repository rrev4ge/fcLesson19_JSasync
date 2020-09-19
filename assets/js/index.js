"use strict";

const btn = document.getElementById("btn")

btn.addEventListener("click", (event) => {
    alert("Alert")
})


// function logNum() {
//   for (let i = 1; i <= 20; i++) {
//     setTimeout(()=>{
//       console.log(i);
//       setTimeout()
//     },1000);
// }
// }

// setInterval(()=>{
//   i++;
// },100);

// clearInterval(setIi);


const p1  = new Promise((resolve, reject) => {
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

fetch("../")