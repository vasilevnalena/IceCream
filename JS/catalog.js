import * as functions from "./behaviourElements.js";

let buttonMainMenu = document.querySelector(".catalog__button");
let modalMainMenu = document.querySelector(".modal-catalog-menu");

let buttonSearch = document.querySelector(".search__button");
let modalSearch = document.querySelector(".modal-search");

let buttonLogin = document.querySelector(".login__button");
let modalLogin = document.querySelector(".modal-login");


functions.popupWindowActions(buttonLogin, modalLogin);
functions.popupWindowActions(buttonSearch, modalSearch);
functions.popupWindowActions(buttonMainMenu, modalMainMenu);


const filledBasket = () => {
    return `
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
  >
    <path
      fill="#E84D37"
      d="M5.888 4.031L6.922 13h10.45l1.176-8.969z"
    />
    <circle fill="#343434" cx="6.984" cy="18" r="2" />
    <circle fill="#343434" cx="15.984" cy="18" r="2" />
    <path
      fill="#343434"
      d="M5.657 2.031L5.422 0H0v2h3.64l1.5 13h13.988l1.699-12.969H5.657zM17.372 13H6.922L5.888 4.031h12.66L17.372 13z"
    />
  </svg>
  2 товара
    `;
};

const filledBasketElement = document.querySelector(`.basket-button`);
filledBasketElement.classList.add("filled-basket");
render(filledBasketElement, filledBasket(), `beforeend`);