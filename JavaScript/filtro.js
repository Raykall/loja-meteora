const inputHeader = document.querySelector(".input__header");
const cardAll = document.querySelectorAll(".descricao");

inputHeader.addEventListener("input", inputEscrito);

function inputEscrito() {
  if (inputHeader.value !== "") {
    var slide = document.querySelector(".slider");
    var category = document.querySelector(".category");

    slide.classList.add("invisivel");
    category.classList.add("invisivel");

    cardAll.forEach((f) => {
      const title = f.querySelector(".text__title").textContent.toLowerCase();
      console.log(title);
      if (!title.includes(inputHeader.value.toLowerCase())) {
        f.classList.add("invisivel");
      } else {
        f.classList.remove("invisivel");
      }
    });
  } else {
    cardAll.forEach((f) => {
      f.classList.remove("invisivel");
    });
  }
}
