import "./styles.css";
import { createMenuPage } from "./menu.js";

const homeBtn = document.getElementById("Home");
const menuBtn = document.getElementById("Menu");
const aboutBtn = document.getElementById("About");

homeBtn.addEventListener("click", (e) => {
  content.replaceChildren();
  createHomePage();
});

menuBtn.addEventListener("click", (e) => {
  content.replaceChildren();
  createMenuPage();
});

function createHomePage() {
  const content = document.getElementById("content");

  const homePage = document.createElement("div");
  homePage.id = "home-page";

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

  content.append(homePage);
}

createHomePage();
