import * as functions from "./behaviourElements.js";

let buttonMainMenu = document.querySelector(".catalog__button");
let modalMainMenu = document.querySelector(".modal-catalog-menu");

let buttonSearch = document.querySelector(".search__button");
let modalSearch = document.querySelector(".modal-search");

let buttonLogin = document.querySelector(".login__button");
let modalLogin = document.querySelector(".modal-login");

let radioOffer1 = document.querySelector("#radio-offer-1");
let radioOffer2 = document.querySelector("#radio-offer-2");
let radioOffer3 = document.querySelector("#radio-offer-3");

let buttonFeedback = document.querySelector(".feedback-button");
let modalFeedback = document.querySelector(".modal-feedback");

functions.modalWindowActions(buttonFeedback, modalFeedback);

functions.popupWindowActions(buttonLogin, modalLogin);
functions.popupWindowActions(buttonSearch, modalSearch);
functions.popupWindowActions(buttonMainMenu, modalMainMenu);

functions.offerSwitchRadioButton(
  radioOffer1,
  "background-offer-1",
  "picture-offer-1",
  "Крем-брюле и пломбир<br />с малиновым джемом"
);

functions.offerSwitchRadioButton(
  radioOffer2,
  "background-offer-2",
  "picture-offer-2",
  "Шоколадный пломбир<br />и лимонный сорбет"
);

functions.offerSwitchRadioButton(
  radioOffer3,
  "background-offer-3",
  "picture-offer-3",
  " Пломбир с помадкой<br />и клубничный щербет"
);


const emptyBasket = () => {
  return `
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="21"
  height="20"
  viewBox="0 0 21 20"
>
  <g fill="#FFF">
    <path
      d="M5.657 2.031L5.422 0H0v2h3.64l1.5 13h13.988l1.699-12.969H5.657zM17.372 13H6.922L5.888 4.031h12.66L17.372 13z"
    />
    <circle cx="6.984" cy="18" r="2" />
    <circle cx="15.984" cy="18" r="2" />
  </g>
</svg>
Пусто
  `;
};

const emptyBasketElement = document.querySelector(`.basket-button`);

render(emptyBasketElement, emptyBasket(), `beforeend`);