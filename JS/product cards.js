import {render} from "./renderingElements.js";

const productCards = () => {
  return `
<ul class="tastes-creamy">
  <li class="tastes-item">
    <img src="IMG/Taste_1.png" alt="Мороженое 1" />
    <p class="price">
      310
      <span class="rub">₽</span>
      <span class="unit-monetary">/кг</span>
    </p>

    <a class="ice-cream-name" href="">
      Сливочное с апельсиновым джемом и цитрусовой стружкой
    </a>
  </li>

  <li class="tastes-item">
    <img src="IMG/Taste_2.png" alt="Мороженое 2" />
    <p class="price">
      380
      <span class="rub">₽</span>
      <span class="unit-monetary">/кг</span>
    </p>

    <a class="ice-cream-name" href="">
      Сливочно-кофейное с кусочками шоколада
    </a>
  </li>

  <li class="tastes-item">
    <img src="IMG/Taste_3.png" alt="Мороженое 3" />
    <p class="price">
      355
      <span class="rub">₽</span>
      <span class="unit-monetary">/кг</span>
    </p>
    <a class="ice-cream-name" href="">
      Сливочно-клубничное с присыпкой из белого шоколада
    </a>
  </li>

  <li class="tastes-item">
    <img src="IMG/Taste_4.png" alt="Мороженое 4" />
    <p class="price">
      415
      <span class="rub">₽</span>
      <span class="unit-monetary">/кг</span>
    </p>
    <a class="ice-cream-name" href="">
      Сливочное крем-брюле с карамельной подливкой
    </a>
  </li>

  <li class="tastes-item">
    <img src="IMG/Taste_5.png" alt="Мороженое 5" />
    <p class="price">
      325
      <span class="rub">₽</span>
      <span class="unit-monetary">/кг</span>
    </p>
    <a class="ice-cream-name" href="">
      Сливочное с брусничным джемом
    </a>
  </li>

  <li class="tastes-item">
    <img src="IMG/Taste_6.png" alt="Мороженое 6" />
    <p class="price">
      410
      <span class="rub">₽</span>
      <span class="unit-monetary">/кг</span>
    </p>
    <a class="ice-cream-name" href="">
      Сливочно-черничное с цельными ягодами черники
    </a>
  </li>

  <li class="tastes-item">
    <img src="IMG/Taste_7.png" alt="Мороженое 7" />
    <p class="price">
      375
      <span class="rub">₽</span>
      <span class="unit-monetary">/кг</span>
    </p>
    <a class="ice-cream-name" href="">
      Сливочно-лимонное с карамельной присыпкой
    </a>
  </li>

  <li class="tastes-item">
    <img src="IMG/Taste_8.png" alt="Мороженое 8" />
    <p class="price">
      320
      <span class="rub">₽</span>
      <span class="unit-monetary">/кг</span>
    </p>
    <a class="ice-cream-name" href="">
      Сливочное с шоколадной стружкой
    </a>
  </li>

  <li class="tastes-item">
    <img src="IMG/Taste_9.png" alt="Мороженое 9" />
    <p class="price">
      440
      <span class="rub">₽</span>
      <span class="unit-monetary">/кг</span>
    </p>
    <a class="ice-cream-name" href="">
      Сливочно-ванильное с кусочками шоколада
    </a>
  </li>
  <li class="tastes-item">
    <img src="IMG/Taste_10.png" alt="Мороженое 10" />
    <p class="price">
      435
      <span class="rub">₽</span>
      <span class="unit-monetary">/кг</span>
    </p>
    <a class="ice-cream-name" href="">
      Сливочноe с ментоловым сиропом
    </a>
  </li>
  <li class="tastes-item">
    <img src="IMG/Taste_11.png" alt="Мороженое 11" />
    <p class="price">
      355
      <span class="rub">₽</span>
      <span class="unit-monetary">/кг</span>
    </p>
    <a class="ice-cream-name" href="">
      Сливочное с кусочками черного шоколада
    </a>
  </li>
  <li class="tastes-item">
    <img src="IMG/Taste_12.png" alt="Мороженое 12" />
    <p class="price">
      420
      <span class="rub">₽</span>
      <span class="unit-monetary">/кг</span>
    </p>
    <a class="ice-cream-name" href="">
      Сливочное с мятным сиропом
    </a>
  </li>
</ul>;
`;
};


// render(footerElement, productCards(),`beforeend`);