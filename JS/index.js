let buttonMainMenu = document.querySelector(".catalog__button");
let modalMainMenu = document.querySelector(".modal-catalog-menu");

let buttonSearch = document.querySelector(".search__button");
let modalSearch = document.querySelector(".modal-search");

let buttonLogin = document.querySelector(".login__button");
let modalLogin = document.querySelector(".modal-login");

let bodyPage = document.querySelector("body");
let radioOffer1 = document.querySelector("#radio-offer-1");
let radioOffer2 = document.querySelector("#radio-offer-2");
let radioOffer3 = document.querySelector("#radio-offer-3");

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

function offerSwitchRadioButton(radioOffer, backgroundOffer, pictureOffer) {
  radioOffer.addEventListener("click", () => {
    bodyPage.classList = "";
    bodyPage.classList.add(backgroundOffer);
    bodyPage.classList.add(pictureOffer);
  });
}

modalWindowActions(buttonLogin, modalLogin, "modal-show");
modalWindowActions(buttonSearch, modalSearch, "modal-show");
modalWindowActions(buttonMainMenu, modalMainMenu, "modal-show");

offerSwitchRadioButton(radioOffer1, "background-offer-1", "picture-offer-1");
offerSwitchRadioButton(radioOffer2, "background-offer-2", "picture-offer-2");
offerSwitchRadioButton(radioOffer3, "background-offer-3", "picture-offer-3");
