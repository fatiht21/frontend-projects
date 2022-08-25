const cardContainerEl = document.querySelector(".card__container");

let cards = [
  { id: 1, src: "./img/shape_1.png" },
  { id: 2, src: "./img/shape_2.png" },
  { id: 3, src: "./img/shape_3.png" },
  { id: 4, src: "./img/shape_4.png" },
  { id: 5, src: "./img/shape_5.png" },
  { id: 6, src: "./img/shape_6.png" },
  { id: 7, src: "./img/shape_7.png" },
  { id: 8, src: "./img/shape_8.png" },
];

let dublicateCards = [...cards, ...cards];
let deailingCards = [];
selectRandomCard = () => {
  let randomCardOrder = Math.round(Math.random() * dublicateCards.length - 1);
  return dublicateCards.splice(randomCardOrder, 1);
};
const dealCards = () => {
  for (let i = 0; i < 16; i++) {
    deailingCards = [...deailingCards, ...selectRandomCard()];
  }
};

const drawCards = () => {
  dealCards();
  let cardItemsHtml = ``;
  deailingCards.forEach((item) => {
    cardItemsHtml += `<img class="card animate__animated" src="${item.src}" onclick="selectedCard(this)" />`;
  });

  cardContainerEl.innerHTML = cardItemsHtml;
};

drawCards();

const selectedCard = (el) => {
  el.classList.add("open", "animate__flipInY");
};
