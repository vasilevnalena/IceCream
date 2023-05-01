let loginLink = document.querySelector(".login-link");
let modalLogin = document.querySelector(".modal-login");

loginLink.addEventListener("click", (evt) => {
  evt.preventDefault();
  modalLogin.classList.add("modal-show");
});

window.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    evt.preventDefault();
    modalLogin.classList.remove("modal-show");
  }
});

window.addEventListener("click", (evt) => {
  if (!loginLink.contains(evt.target)) {
    modalLogin.classList.remove("modal-show");
  }
});
