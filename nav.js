const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");

openMenu.addEventListener("click", () => {
  mobileMenu.classList.add("show");
});
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
});
