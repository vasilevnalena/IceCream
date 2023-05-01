var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");

link.addEventListener("click", (evt) => {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

window.addEventListener("keydown", (evt) => {
  console.log(evt.key);
  if (evt.key === 'Escape') {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  }
});
