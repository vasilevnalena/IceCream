let bodyPage = document.querySelector("body");
let textOfferElement = document.querySelector(".offer-text");
let closeButton = document.querySelector(".close-icon");
let darknessBackground = document.querySelector(".darkness");

export function popupWindowActions(element, popupClass) {
  element.addEventListener("click", () => {
    popupClass.classList.add("show-element");
  });

  window.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      evt.preventDefault();
      popupClass.classList.remove("show-element");
    }
  });

  window.addEventListener("click", (evt) => {
    if (!element.contains(evt.target) && !popupClass.contains(evt.target)) {
      popupClass.classList.remove("show-element");
    }
  });
}

export function offerSwitchRadioButton(
  radioOffer,
  backgroundOffer,
  pictureOffer,
  offerText
) {
  radioOffer.addEventListener("click", () => {
    bodyPage.classList = "";
    bodyPage.classList.add(backgroundOffer);
    bodyPage.classList.add(pictureOffer);

    textOfferElement.innerHTML = offerText;
  });
}

export function modalWindowActions(callButton, modalClass) {
  callButton.addEventListener("click", () => {
    modalClass.classList.add("show-element");
    darknessBackground.classList.add("show-element");
  });

  closeButton.addEventListener("click", () => {
    modalClass.classList.remove("show-element");
    darknessBackground.classList.remove("show-element");
  });
}
