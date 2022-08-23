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

const drawCards = () => {
  let cardItemsHtml = ``;
  dublicateCards.forEach((item) => {
    cardItemsHtml += `<img src="${item.src}" alt="" class="card" />`;
  });

  cardContainerEl.innerHTML = cardItemsHtml;
};

drawCards();
