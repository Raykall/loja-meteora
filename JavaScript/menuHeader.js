const boxChecked = document.querySelector(".container__button");
const listMenu = document.querySelector(".lista-menu");
const FecharListMenu = document.querySelector(".menu-hambuguer");

boxChecked.addEventListener("click", () => {
  listMenu.style.display = "block";
  FecharListMenu.style.display = "block";
}) 

FecharListMenu.addEventListener("click", () => {
  listMenu.style.display = "none";
  FecharListMenu.style.display = "none";
})