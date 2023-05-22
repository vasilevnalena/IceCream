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

let textOfferElement = document.querySelector(".offer-text");

let feedbackButton = document.querySelector(".feedback-button");
let closeButton = document.querySelector(".close-icon");
// let darknessBackground = document.querySelector(".darkness");
let modalFeedback = document.querySelector(".modal-feedback");

function popupWindowActions(element, popupClass, showPopupWindow) {
  element.addEventListener("click", () => {
    popupClass.classList.add(showPopupWindow);
  });

  window.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      evt.preventDefault();
      popupClass.classList.remove(showPopupWindow);
    }
  });

  window.addEventListener("click", (evt) => {
    if (!element.contains(evt.target) && !popupClass.contains(evt.target)) {
      popupClass.classList.remove(showPopupWindow);
    }
  });
}

function offerSwitchRadioButton(radioOffer, backgroundOffer, pictureOffer,offerText) {
  radioOffer.addEventListener("click", () => {
    bodyPage.classList = "";
    bodyPage.classList.add(backgroundOffer);
    bodyPage.classList.add(pictureOffer);

    textOfferElement.innerHTML = offerText;
  });
}

// function modalWindowActions(element, modalClass, showModalWindow, darknessBackground) {
//   element.addEventListener("click", () => {
//     modalClass.classList.add(showModalWindow);
//     bodyPage.classList.add(darknessBackground);
//   });

//   closeButton.addEventListener("click", () => {
//     modalClass.classList.remove(showModalWindow);
//     bodyPage.classList.remove(darknessBackground);
//   });
// }

popupWindowActions(buttonLogin, modalLogin, "show-element");
popupWindowActions(buttonSearch, modalSearch, "show-element");
popupWindowActions(buttonMainMenu, modalMainMenu, "show-element");

offerSwitchRadioButton(radioOffer1, "background-offer-1", "picture-offer-1","Крем-брюле и пломбир<br />с малиновым джемом");
offerSwitchRadioButton(radioOffer2, "background-offer-2", "picture-offer-2","Шоколадный пломбир<br />и лимонный сорбет");
offerSwitchRadioButton(radioOffer3, "background-offer-3", "picture-offer-3"," Пломбир с помадкой<br />и клубничный щербет");
