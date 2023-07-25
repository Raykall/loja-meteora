const listaUl = document.querySelector(".card__descricao");
cards = [];

async function cardImprimir() {
  const conect = await fetch("http://localhost:3000/card");
  cards = await conect.json();

  exibirCard(cards);
}

function exibirCard(listaDeCard) {
  //console.log(listaDeCard);
  listaUl.innerHTML = "";
  listaDeCard.forEach((card) => {
    listaUl.innerHTML += `
        <li class="descricao">
              <img src="${card.image}" alt="${card.alt}" class="descricao__image" />
              <div class="descricao__text">
                <h3 class="text__title">
                ${card.title}
                </h3>
                <p class="text__p"> ${card.text}</p>
                <span class="text__span"><strong>${card.price}</strong></span>
                <button class="text__button"  onClick="openModal(${card.id})">Ver mais</button>
              </div>
            </li> 
        `;
  });
}

cardImprimir();
