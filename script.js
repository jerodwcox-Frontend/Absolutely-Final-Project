const menu = document.getElementById("menu");
const openBtn = document.getElementById("openMenuBtn");
const closeBtn = document.getElementById("closeMenuBtn");

// open
openBtn.addEventListener("click", () => {
  menu.classList.add("menu--open");
});

// close
closeBtn.addEventListener("click", () => {
  menu.classList.remove("menu--open");
});

// close if you click the overlay (outside panel)
menu.addEventListener("click", (e) => {
  if (e.target === menu) menu.classList.remove("menu--open");
});

// close menu after clicking a link
document.querySelectorAll(".menu__link").forEach((a) => {
  a.addEventListener("click", () => menu.classList.remove("menu--open"));
});
