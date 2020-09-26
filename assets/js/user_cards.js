"use strict";

const body = document.querySelector("body");
const root = document.getElementById("root");
const userList = document.createElement("ul");
userList.classList.add("usersList");
const header = document.createElement("div");
header.classList.add("header");
root.append( header, userList);





fetchFunc("../../assets/data/users.json")
.then((users) => addListElements(users)).catch(console.error);

fetchFunc("http://192.168.1.148:3000/auth")
.then((user) => addAuthUser(user)).catch(console.error);


function fetchFunc(url) {
    return fetch(url)
        .then((res) => res.json());
}


function addAuthUser(param) {

    const {
    id,
    firstName,
    lastName,
    position,
    profilePicture,
    } = param;


    const logoImg = createProfileLogo(profilePicture);
    const userFullName = createProfileName(firstName, lastName);
    const userPosition = position;
    header.append( userFullName, userPosition, logoImg[1],)

    console.log(firstName);
    
}

function addListElements(users) {
    const listItems = users.map(createListElement).filter(element => element);
    userList.append(...listItems);
}

function createListElement({ id, firstName, lastName, profilePicture }) {
    if (!firstName && !lastName) {
        return;
    }
    const li = document.createElement("li");
    li.classList.add("userCard");
    li.dataset.id = id;
    const images = createProfileLogo(profilePicture);
    const userFullName = createProfileName(firstName, lastName);
    const userPosition = createProfilePosition();
    const connectBtn = createProfileBtn();
    li.append(...images, userFullName, userPosition, connectBtn);
    return li;
}

function createProfileLogo(profilePicture) {
    const imgBg = document.createElement("img");
    const img = document.createElement("img");
    imgBg.classList.add("profileImgBackground");
    img.classList.add("profileImg");
    img.setAttribute("src", profilePicture);
    imgBg.setAttribute("src", profilePicture);
    img.onerror = () => {
        img.setAttribute("src", "../../assets/images/user_logo.png");
        imgBg.setAttribute("src", img.getAttribute("src"));
    };
    return [imgBg, img];
}

function createProfileName(firstName, lastName) {
    const h2 = document.createElement("h2");
    h2.append(document.createTextNode(firstName + " " + lastName));
    h2.classList.add("profileName");
    return h2;
}

function createProfilePosition() {
    const h3 = document.createElement("h3");
    fetch("../assets/data/positions.json")
        .then((res) => res.json())
        .then((position) => h3.textContent = getRandomValue(position))
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

function getRandomValue(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
