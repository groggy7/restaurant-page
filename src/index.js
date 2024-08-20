import "./style.css";

const navs = document.querySelectorAll("nav");
const content = document.getElementById("content");
navs[0].innerText = "Home";
navs[1].innerText = "Menu";
navs[2].innerText = "About";

const h1 = document.createElement("h1");
h1.innerText = "KEBAB RESTAURANT";

content.appendChild(h1);