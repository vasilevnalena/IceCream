const rangeSelected = document.querySelector(".range-selected");
const minPrice = document.querySelector(".min-price");
const maxPrice = document.querySelector(".max-price");
const minInput = document.querySelector("input.min");
const maxInput = document.querySelector("input.max");

minInput.addEventListener("input", (event) => {
  if (Number(event.target.value) >= Number(maxInput.value)) {
    minInput.value = Number(maxInput, value) - 10;
  }

  minPrice.innerText = event.target.value;
  rangeSelected.style.left = `${(minInput.value / maxInput.max) * 100}%`;
});

maxInput.addEventListener("input", (event) => {
  if (Number(event.target.value) <= Number(minInput.value)) {
    maxInput.value = Number(minInput, value) + 10;
  }

  maxPrice.innerText = event.target.value;
  rangeSelected.style.right = `${100 - (maxInput.value / minInput.max) * 100}%`;
});

