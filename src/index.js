import "./style.css";
import kebablogo from "./assets/kebab.png"
import home from "./home";
import menu from "./menu"

const navs = document.querySelectorAll("nav");
const content = document.getElementById("content");
navs[0].innerText = "Home";
navs[1].innerText = "Menu";
navs[2].innerText = "About";

const logo = document.createElement("div");
logo.className = "logo";
const logoImg = document.createElement("img");
logoImg.src = kebablogo;
logoImg.style.width = "50px";
const logoText = document.createElement("p");
logoText.innerText = "KEBAB RESTAURANT";
logo.appendChild(logoImg);
logo.appendChild(logoText)

navs[0].parentNode.insertBefore(logo, navs[0]);

content.appendChild(home);

navs[0].addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(home);
});

navs[1].addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(menu);
});

navs[2].addEventListener("click", () => {
    content.innerHTML = "";
});