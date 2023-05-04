let loginButton = document.querySelector(".login__button");
let modalLogin = document.querySelector(".modal-login");

let buttonSearch = document.querySelector(".search__button");
let modalSearch = document.querySelector(".modal-search");

function handleElementEvents(element, modalClass, showModalWindow) {
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

handleElementEvents(loginButton, modalLogin, "modal-show");
handleElementEvents(buttonSearch, modalSearch, "modal-show");
