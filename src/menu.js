export function createMenuPage() {
  const content = document.getElementById("content");

  const menuPage = document.createElement("div");
  menuPage.id = "menu-page";

  const menuHeader = document.createElement("h1");
  menuHeader.textContent = "Menu";

  // First course
  const firstCourse = document.createElement("div");
  firstCourse.id = "first-course";

  const firstCourseHeader = document.createElement("h4");
  firstCourseHeader.id = "course-type";
  firstCourseHeader.textContent = "First Course";

  const firstCourseName = document.createElement("h2");
  firstCourseName.textContent = "Charred Corn & Chili Crab Bisque";

  const firstCourseDescription = document.createElement("p");
  firstCourseDescription.className = "menu-description";
  firstCourseDescription.textContent = ` Sweet corn velouté with lump crab, smoked chili oil, and crispy
  shallots.\nWine Pairing: Chardonnay`;

  firstCourse.append(firstCourseHeader, firstCourseName, firstCourseDescription);

  const firstCoursePrice = document.createElement("p");
  firstCoursePrice.textContent = "£25";

  // Main course
  const mainCourse = document.createElement("div");
  mainCourse.id = "main-course";

  const mainCourseHeader = document.createElement("h4");
  mainCourseHeader.id = "course-type";
  mainCourseHeader.textContent = "Main Course";

  const mainCourseName = document.createElement("h2");
  mainCourseName.textContent = "Braised Short Rib with Smoked Parsnip";

  const mainCourseDescription = document.createElement("p");
  mainCourseDescription.className = "menu-description";
  mainCourseDescription.textContent = ` Slow-braised short rib, smoked parsnip purée, charred cipollini onions, and a red wine jus.
  Wine Pairing: Malbec`;

  mainCourse.append(mainCourseHeader, mainCourseName, mainCourseDescription);

  const mainCoursePrice = document.createElement("p");
  mainCoursePrice.textContent = "£28";

  // Dessert course
  const dessertCourse = document.createElement("div");
  dessertCourse.id = "dessert-course";

  const dessertCourseHeader = document.createElement("h4");
  dessertCourseHeader.id = "course-type";
  dessertCourseHeader.textContent = "Dessert";

  const dessertCourseName = document.createElement("h2");
  dessertCourseName.textContent = "Brown Butter Pear Tart";

  const dessertCourseDescription = document.createElement("p");
  dessertCourseDescription.className = "menu-description";
  dessertCourseDescription.textContent = ` Caramelized pears in a brown butter frangipane crust with crème fraîche.
  Wine Pairing: Tawny Port`;

  dessertCourse.append(dessertCourseHeader, dessertCourseName, dessertCourseDescription);

  const dessertCoursePrice = document.createElement("p");
  dessertCoursePrice.textContent = "£14";

  menuPage.append(
    menuHeader,
    firstCourse,
    firstCoursePrice,
    mainCourse,
    mainCoursePrice,
    dessertCourse,
    dessertCoursePrice,
  );

  content.append(menuPage);
}
