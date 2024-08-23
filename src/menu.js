import "./menu.css";

export const kebabList = [
    { url: "https://cookingorgeous.com/wp-content/uploads/2021/06/lamb-shish-kebab-20.jpg", caption: "Shish Kebab", description: "Shish kebab is a popular meal of skewered and grilled cubes of meat."},
    { url: "https://www.chilitochoc.com/wp-content/uploads/2020/02/adana-kebab-3-scaled-e1619694817903.jpg", caption: "Adana Kebab", description: "Adana kebab is hand-minced meat grilled on a skewer over charcoal."},
    { url: "https://i.lezzet.com.tr/images-xxlarge-recipe/homemade-iskender-kebab-f33fcb75-16b0-46eb-b16c-c7d56512916d.jpg", caption: "Iskender Kebab", description: "Iskender kebap is a famous Turkish dish of thinly sliced grilled meat with tomato sauce and yogurt over pita bread."},
    { url: "https://images.deliveryhero.io/image/fd-tr/LH/a75t-hero.jpg?width=512&height=384&quality=45", caption: "Cag Kebab", description: "Cağ kebabı is a Turkish kebab cooked on a horizontal spit, similar to döner but without pressing the meat into a loaf."}
]

export const drinkList = [
    { url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Fresh_ayran.jpg", caption: "Ayran", description: "Ayran is a cold savory yogurt-based beverage that is mixed with salt."},
    { url: "https://bakkalamca.be/2184-large_default/coca-cola-zero-033l.jpg", caption: "Coca Cola Zero", description: "Coca-Cola Zero Sugar, is a diet cola produced by The Coca-Cola Company."},
    { url: "https://www.medicalpark.com.tr/_uploads/_images/_healthGuide/8ua80aZ2.jpg", caption: "Salgam", description: "Salgam is a popular Turkish beverage made from fermented purple carrots, bulgur wheat, and salt."},
]

const menupage = document.createElement("div");
menupage.className = "menu-page";

const kebabs = document.createElement("div");
kebabs.className = "kebabs";

const kebabHeader = document.createElement("div");
kebabHeader.innerText = "OUR KEBABS";
kebabHeader.className = "kebab-header";
kebabs.appendChild(kebabHeader);

const kebabContent = document.createElement("div");
kebabContent.className = "kebab-content";

kebabList.forEach(kebab => {
    const kebabInfo = document.createElement("div");
    kebabInfo.className = "kebab-info";

    const kebabImage = document.createElement("img");
    kebabImage.src = kebab.url;

    const kebabDescription = document.createElement("p");
    kebabDescription.innerText = kebab.description;

    kebabInfo.appendChild(kebabImage);
    kebabInfo.appendChild(kebabDescription);

    kebabContent.appendChild(kebabInfo);
});

kebabs.appendChild(kebabContent)
menupage.appendChild(kebabs);

const drinks = document.createElement("div");
drinks.className = "drinks";

const drinksHeader = document.createElement("div");
drinksHeader.className = "drink-header";
drinksHeader.innerText = "OUR DRINKS";
drinks.appendChild(drinksHeader);

const drinkContent = document.createElement("div");
drinkContent.className = "drink-content";

drinkList.forEach(drink => {
    const drinkInfo = document.createElement("div");
    drinkInfo.className = "drink-info";

    const drinkImage = document.createElement("img");
    drinkImage.src = drink.url;

    const drinkDescription = document.createElement("p");
    drinkDescription.innerText = drink.description;

    drinkInfo.appendChild(drinkImage);
    drinkInfo.appendChild(drinkDescription);

    drinkContent.appendChild(drinkInfo);
});

drinks.appendChild(drinkContent);
menupage.appendChild(drinks)

export default menupage;