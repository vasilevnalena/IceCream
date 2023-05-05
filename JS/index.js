let buttonMainMenu = document.querySelector(".catalog__button");
let modalMainMenu = document.querySelector(".modal-catalog-menu");

let buttonSearch = document.querySelector(".search__button");
let modalSearch = document.querySelector(".modal-search");

let buttonLogin = document.querySelector(".login__button");
let modalLogin = document.querySelector(".modal-login");

let bodyPage = document.querySelector("body");
let radioButtonOffer1 = document.querySelector("#radio-offer-1");
let radioButtonOffer2 = document.querySelector("#radio-offer-2");
let radioButtonOffer3 = document.querySelector("#radio-offer-3");


function modalWindowActions(element, modalClass, showModalWindow) {
  element.addEventListener("click", () => {
    modalClass.classList.add(showModalWindow);
  });

  window.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      evt.preventDefault();
      modalClass.classList.remove(showModalWindow);
    }
  });

  window.addEventListener("click", (evt) => {
    if (!element.contains(evt.target) && !modalClass.contains(evt.target)) {
      modalClass.classList.remove(showModalWindow);
    }
  });
}

function offerSwitchRadioButton() {
  radioButtonOffer1.addEventListener("click", () => {
    bodyPage.classList.add("background-offer-1");
    bodyPage.classList.add("picture-offer-1");
  });

  radioButtonOffer2.addEventListener("click", () => {
    bodyPage.classList.add("background-offer-2");
    bodyPage.classList.add("picture-offer-2");
  });

  radioButtonOffer3.addEventListener("click", () => {
    bodyPage.classList.add("background-offer-3");
    bodyPage.classList.add("picture-offer-3");
  });
}

modalWindowActions(buttonLogin, modalLogin, "modal-show");
modalWindowActions(buttonSearch, modalSearch, "modal-show");
modalWindowActions(buttonMainMenu, modalMainMenu, "modal-show");

offerSwitchRadioButton();
