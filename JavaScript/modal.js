let btnNl = document.querySelector(".button__nl");
let divModal = document.querySelector(".modal__visible");
let modal = document.querySelector(".modal");
let btnFechar = document.querySelector(".a__modal");

btnNl.addEventListener("click", () => {
  if (divModal.style.display == "none" || modal.style.display == "none") {
    divModal.style.display = "block";
    modal.style.display = "block";
  } else {
    divModal.style.display = "none";
  }
});

btnFechar.addEventListener("click", () => {
  if (divModal.style.display == "block" && modal.style.display == "block") {
    modal.style.display = "none";
    divModal.style.display = "none";
  }
});
