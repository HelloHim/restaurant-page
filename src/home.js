import "./styles.css";
import { createMenuPage } from "./menu.js";
import { createContactPage } from "./contact.js";

const content = document.getElementById("content");
const homeBtn = document.getElementById("Home");
const menuBtn = document.getElementById("Menu");
const contactBtn = document.getElementById("Contact");

homeBtn.addEventListener("click", () => {
  content.replaceChildren();
  createHomePage();
});

menuBtn.addEventListener("click", () => {
  content.replaceChildren();
  createMenuPage();
});

contactBtn.addEventListener("click", () => {
  content.replaceChildren();
  createContactPage();
});

function createHomePage() {
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
  btn.addEventListener("click", () => {
    content.replaceChildren();
    createMenuPage();
  });

  homePage.append(header, para, btn);
  content.append(homePage);
}

createHomePage();
