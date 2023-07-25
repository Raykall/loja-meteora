function openModal(id) {
  const modalBody = document.querySelector(".body__modal");
  const modal = document.querySelector(".modal__card");
  const divModal = document.querySelector(".modal__visible");
  if (cards.length) {
    const product = cards.find((f) => f.id === id.toString());
    console.log(product, id);
    modalBody.innerHTML = `
    <div class="img-body-modal">
    <img src="${product.image}" alt="${product.alt}">
  </div>
  <div class="text-body-modal">
   <div class="div__body-modal">
    <h3 class="text__title-modal">${product.title}</h3>
    <p class="text__p-modal">${product.text}</p>
    <span class="text__span-modal">${product.price}</span>
    <p class="vendido">Vendido e entregue por Riachuelo</p>
    </div>
    <div class="cores">
      <h3 class="cores__texto">Cores:</h3>
      <div class="body__cores">
        <input  id="cor1" type="radio">
        <label for="cor1">Azul Claro</label>
        <input id="cor2" type="radio">
        <label for="cor2">Offwhite</label>
        <input id="cor3" type="radio">
        <label for="cor3">Preto</label>
      </div>
    </div>
    <div class="tamanho">
      <h3 class="tamanho__texto">Tamanho:</h3>
      <div class="body__tamanho">
      <input  id="p" type="radio">
      <label for="p">P</label>
      <input id="pp" type="radio">
      <label for="pp">PP</label>
      <input id="m" type="radio">
      <label for="m">M</label>
      <input id="g" type="radio">
      <label for="g">GG</label>
      <input id="gg" type="radio">
      <label for="gg">GG</label>
      </div>
    </div>
    <button class="btn__modal-card"> Adicionar à sacola</button>
  </div>
    `;

    modal.style.display = "block";
    divModal.style.display = "block";
  }

  let btnCloseModal = document.querySelector(".a__modal-card");

  btnCloseModal.addEventListener("click", () => {
    if (divModal.style.display == "block" && modal.style.display == "block") {
      modal.style.display = "none";
      divModal.style.display = "none";
    }
  });
}
