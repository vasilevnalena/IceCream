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