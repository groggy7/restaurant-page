import "./home.css";

const homepage = document.createElement("div");
homepage.className = "home-page";

const description = document.createElement("p");
description.className = "description";
description.innerText = `Meet Turkey's award winning kebab restaurant
Come and visit us today!`;

homepage.appendChild(description);

const photoContainer = document.createElement("div");
photoContainer.className = "photo-container";

const photoData = [
    { url: "https://cookingorgeous.com/wp-content/uploads/2021/06/lamb-shish-kebab-20.jpg", caption: "Shish Kebab"},
    { url: "https://www.chilitochoc.com/wp-content/uploads/2020/02/adana-kebab-3-scaled-e1619694817903.jpg", caption: "Adana Kebab"},
    { url: "https://i.lezzet.com.tr/images-xxlarge-recipe/homemade-iskender-kebab-f33fcb75-16b0-46eb-b16c-c7d56512916d.jpg", caption: "Iskender Kebab"},
    { url: "https://images.deliveryhero.io/image/fd-tr/LH/a75t-hero.jpg?width=512&height=384&quality=45", caption: "Cag Kebab"}
]

photoData.forEach((photo) => {
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