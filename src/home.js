import "./home.css";
import { kebabList } from "./menu"

const homepage = document.createElement("div");
homepage.className = "home-page";

const description = document.createElement("p");
description.className = "description";
description.innerText = `Meet Turkey's award winning kebab restaurant
Come and visit us today!`;

homepage.appendChild(description);

const photoContainer = document.createElement("div");
photoContainer.className = "photo-container";

kebabList.forEach((photo) => {
    const photoDiv = document.createElement("div");
    photoDiv.className = "photo-div";
    const img = document.createElement("img");
    img.src = photo.url;
    img.style.width = "200px"
    const caption = document.createElement("p");
    caption.innerText = photo.caption;

    photoDiv.appendChild(img);
    photoDiv.appendChild(caption);

    photoContainer.appendChild(photoDiv);
})

homepage.appendChild(photoContainer);

export default homepage