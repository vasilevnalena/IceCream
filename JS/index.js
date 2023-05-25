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
