let menuToggle = document.getElementById("menu-toggle");
let navMenu = document.getElementById("nav-menu");
menuToggle.addEventListener("click", () => {
  if (menuToggle.getAttribute("data-visible") === "true") {
    navMenu.setAttribute("data-visible", false);
    menuToggle.setAttribute("data-visible", false);
  } else {
    navMenu.setAttribute("data-visible", "true");
    menuToggle.setAttribute("data-visible", "true");
  }
});
