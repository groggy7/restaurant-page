
import "./about.css"

const about = document.createElement("div");
about.className = "about";

const aboutText = document.createElement("p");
aboutText.innerText = `Welcome to our restaurant, where tradition meets taste. 
Located in the heart of Istanbul, we have been serving the finest kebabs for over 20 years. 
Our chefs use only the freshest ingredients and authentic recipes to bring you a dining experience like no other. 
Join us for a meal and discover why we are Turkey's award-winning kebab restaurant.`;

about.appendChild(aboutText);

const mapContainer = document.createElement("div");
mapContainer.className = "map";
mapContainer.id = "map";

about.appendChild(mapContainer);

const mapFrame = document.createElement("iframe");
mapFrame.className = "map-frame";
mapFrame.src = "https://www.google.com/maps?q=Fener+Kalamış+Caddesi,Istanbul,Turkey&output=embed";

mapContainer.appendChild(mapFrame);
    
export default about;