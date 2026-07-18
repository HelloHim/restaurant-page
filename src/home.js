import "./styles.css";

const content = document.getElementById("content");

const homePage = document.createElement("div");
homePage.id = "home-page";
content.append(homePage);

const header = document.createElement("h1");
header.textContent = "Welcome to GlassRoots";

const para = document.createElement("p");
para.textContent = `
        At GlassRoots, we believe great food starts with strong foundations. Housed in a light-filled space, our kitchen
        turns out dishes built from honest, seasonal ingredients and a healthy respect for where they came from. Expect
        a menu that changes with the seasons, a wine list chosen to match, and a room designed to feel like home. Come
        hungry, stay a while, and taste what happens when food is grown with care.`;

const btn = document.createElement("button");
btn.textContent = "Menu";

homePage.append(header, para, btn);
