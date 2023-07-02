const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const header = () => {
  return `
<nav class="main-navigation">
  <a class="main-header-logo" href="index.html">
    <img
      src="IMG/logo.svg"
      width="154"
      height="64"
      alt="Логотип магазина"
    />
  </a>
  <div class="menu-container">
    <ul class="site-navigation">
      <li class="catalog-button-container">
        <button
          class="catalog__button site-navigation-button"
          type="button"
        >
          Каталог
        </button>

        <section class="modal modal-catalog-menu">
          <h6 class="visually-hidden">Catalog menu</h6>
          <form class="catalog-menu-form">
            <p>Новинки</p>
            <ul class="new-products">
              <li><!-- разделитель--></li>
              <li class="creamy-ice-cream-item">
                <a class="creamy-ice-cream__button" href="catalog_creamy.html"
                  >Сливочное</a
                >
              </li>
              <li>Щербеты</li>
              <li>Фруктовый лед</li>
              <li>Мелорин</li>
            </ul>
          </form>
        </section>
      </li>

      <li>
        <a class="site-navigation-button" href="">Доставка и оплата</a>
      </li>

      <li><a class="site-navigation-button" href="">О Компании</a></li>
    </ul>

    <ul class="user-navigation">
      <li class="search-button-container">
        <button
          class="search__button user-navigation-button"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="17"
            height="17"
            viewBox="0 0 17 17"
          >
            <path
              fill="#fff"
              d="M16.958 15.527L11.75 10.32A6.455 6.455 0 0 0 13 6.5 6.5 6.5 0 1 0 6.5 13a6.465 6.465 0 0 0 3.839-1.263l5.205 5.204 1.414-1.414zM6.5 11C4.019 11 2 8.981 2 6.5S4.019 2 6.5 2 11 4.019 11 6.5 8.981 11 6.5 11z"
            />
          </svg>
        </button>

        <section class="modal modal-search">
          <h6 class="visually-hidden">Search</h6>
          <form class="search-form">
            <label
              ><input
                class="input-search"
                type="search"
                placeholder="Крем-брюле"
            /></label>
          </form>
        </section>
      </li>

      <li class="login-button-container">
        <button
          class="login__button user-navigation-button"
          type="button"
        >
          <svg
            width="21"
            height="19"
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.00001 14.875L13.917 9.5L7.00001 4.125V7.042H0.958008V11.959H7.00001V14.875Z"
              fill="white"
            />
            <path
              d="M19 0H6C4.9 0 4 0.9 4 2V4H6V2H19V17H6V15H4V17C4 18.1 4.9 19 6 19H19C20.1 19 21 18.1 21 17V2C21 0.9 20.1 0 19 0Z"
              fill="white"
            />
          </svg>
          Вход
        </button>

        <section class="modal modal-login">
          <h6 class="visually-hidden">Login window</h6>
          <form class="login-form">
            <label class="login"
              ><input
                class="login-input"
                type="email"
                placeholder="email@example.com"
            /></label>

            <label class="password"
              ><input
                class="password-input"
                type="password"
                placeholder="••••••••"
            /></label>

            <div class="sign-in-container">
              <button class="button-sign-in" type="submit">Войти</button>

              <ul class="registration-container">
                <li><a class="restore" href="#">Забыли пароль?</a></li>
                <li>
                  <a class="registration" href="#">Новая регистрация</a>
                </li>
              </ul>
            </div>
          </form>
        </section>
      </li>

      <li class="basket-button-container">
        <button
          class="basket-button user-navigation-button"
          type="button"
        >        
        </button>

        <section class="modal popup-filled-basket">
        <h6 class="visually-hidden">Filled basket</h6>
        <ul class="products-in-basket">
          <li class="product-item">
            <div class="delete-product-container">
              <button class="delete-product-button" type="button">
                <img src="IMG/cross-small.svg" width="11" height="11" />
              </button>
            </div>
            <div class="taste-image">
              <img
                src="IMG/Taste_1.png"
                width="33"
                height="33"
                alt="Мороженое 1"
              />
            </div>
            <p class="taste-text">Пломбир с апельсиновым джемом</p>
            <p class="weight-text">1.5 кг х</p>
            <p class="price-text">200 руб.</p>
            <p class="final-sum">300 руб.</p>
          </li>
  
          <li class="product-item">
            <div class="delete-product-container">
              <button class="delete-product-button" type="button">
                <img src="IMG/cross-small.svg" width="11" height="11" />
              </button>
            </div>
            <div class="taste-image">
              <img
                src="IMG/Taste_3.png"
                width="33"
                height="33"
                alt="Мороженое 3"
              />
            </div>
            <p class="taste-text">
              Клубничный пломбир с присыпкой из белого шоколада
            </p>
            <p class="weight-text">1.5 кг х</p>
            <p class="price-text">300 руб.</p>
            <p class="final-sum">450 руб.</p>
          </li>
        </ul>
  
        <hr class="popup-split-line"/>
  
        <div class="total-container">
          <p class="total-text">Итого: 750 руб.</p>
  
          <button class="place-an-order-button" type="button">
            Оформить заказ
          </button>
        </div>
      </section>
      </li>
    </ul>
  </div>
</nav>

<h1 class="visually-hidden">Магазин мороженого</h1>
<ul class="working-time">
  <li>С 10 до 20, ежедневно</li>
  <li>8 812 450-25-25</li>
</ul>
`;
};

const footer = () => {
  return `
    <span class="social-media-and-menu-container">
      <ul class="social-media">
        <li>
          <a class="social-media-link twitter__link" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path
                fill="#FFF"
                d="M16 0C7.164 0 0 7.164 0 16c0 8.837 7.164 16 16 16 8.837 0 16-7.163 16-16 0-8.836-7.163-16-16-16zm7.944 12.809c-.251 6.516-3.463 10.832-10.992 10.702h-.486c-.447 0-4.543-.443-5.344-1.823 2.479.19 4.247-.406 5.12-1.136-1.048-.289-2.923-.461-3.251-2.848.384.104.618.221 1.299.113-1.307-.824-2.758-1.519-2.679-3.643.311.317 1.164.518 1.46.457-.768-.233-2.149-3.244-.974-4.781 1.984 1.79 4.075 3.482 7.804 3.643.227-2.214 1.24-3.699 3.168-4.325 1.84-.479 3.255.26 3.901 1.138.737-.224 1.453-.466 2.193-.685-.004.833-.569 1.463-.935 1.709.747.165 1.423-.475 1.423-.475-.184.963-1.094 1.725-1.707 1.954z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a class="social-media-link telegram__link" href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <g fill="#FFF">
                <path
                  d="M20.916 16a4.938 4.938 0 1 1-9.877 0c0-.394.051-.773.138-1.14h-.897v6.838h11.396V14.86h-.897c.086.367.137.746.137 1.14z"
                />
                <path
                  d="M15.978 18.659c1.466 0 2.659-1.193 2.659-2.659s-1.193-2.659-2.659-2.659c-1.466 0-2.659 1.193-2.659 2.659s1.192 2.659 2.659 2.659zM18.637 10.302h3.039v3.039h-3.039z"
                />
                <path
                  d="M16 0C7.164 0 0 7.164 0 16c0 8.837 7.164 16 16 16 8.837 0 16-7.163 16-16 0-8.836-7.163-16-16-16zm7.955 21.698a2.285 2.285 0 0 1-2.279 2.279H10.279A2.285 2.285 0 0 1 8 21.698V10.302a2.286 2.286 0 0 1 2.279-2.279h11.396a2.286 2.286 0 0 1 2.279 2.279v11.396z"
                />
              </g>
            </svg>
          </a>
        </li>
        <li>
          <a class="social-media-link facebook__link" href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path
                fill="#FFF"
                d="M16 0C7.164 0 0 7.163 0 16s7.164 16 16 16c8.837 0 16-7.164 16-16S24.837 0 16 0zm4.062 9.455h-3.021v3.444h3.021v3.445h-3.021v8.61H14.02v-8.61H11v-3.445h3.021V9.455c0-1.902 1.353-3.445 3.021-3.445h3.021v3.445z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a class="social-media-link vk__link" href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <g fill="#FFF">
                <path
                  d="M16.637 14.495c.402-.019.719-.082.951-.188.326-.145.54-.33.641-.559.101-.229.15-.496.15-.797 0-.232-.058-.465-.174-.697-.116-.232-.322-.405-.617-.517-.264-.1-.592-.155-.984-.165a76.242 76.242 0 0 0-1.652-.014h-.339v2.965h.565c.571 0 1.057-.009 1.459-.028zM18.118 17.084c-.282-.081-.672-.125-1.166-.132a127.97 127.97 0 0 0-1.55-.009h-.79v3.493h.264c1.014 0 1.74-.003 2.18-.009a3.2 3.2 0 0 0 1.212-.245c.377-.157.633-.364.774-.625s.214-.562.214-.9c0-.446-.088-.788-.261-1.03-.17-.241-.464-.423-.877-.543z"
                />
                <path
                  d="M16 0C7.164 0 0 7.164 0 16c0 8.837 7.164 16 16 16 8.837 0 16-7.163 16-16 0-8.836-7.163-16-16-16zm6.602 20.531a3.73 3.73 0 0 1-1.124 1.327c-.552.415-1.161.71-1.823.886s-1.501.264-2.519.264h-6.121V8.987h5.443c1.13 0 1.957.038 2.48.113a5.126 5.126 0 0 1 1.561.5c.533.27.929.632 1.189 1.087.26.455.392.975.392 1.558 0 .678-.179 1.278-.536 1.795-.358.518-.863.92-1.517 1.208v.075c.917.182 1.642.559 2.179 1.13.537.571.807 1.325.807 2.261 0 .678-.138 1.283-.411 1.817z"
                />
              </g>
            </svg>
          </a>
        </li>
      </ul>

      <ul class="footer-menu-list">
        <li class="heart-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="13"
            viewBox="0 0 15 13"
          >
            <path
              fill="#FFF"
              d="M10.799 0c-1.35 0-2.551.65-3.3 1.661A4.097 4.097 0 0 0 4.199 0C1.875 0 0 1.806 0 4.044 0 7.223 7.499 13 7.499 13s7.499-5.777 7.499-8.956C14.998 1.806 13.123 0 10.799 0z"
            />
          </svg>
        </li>
        <li>
          <a href="">Для поставщиков</a>
        </li>
        <li><a href="">Наши документы</a></li>
        <li></li>
        <li><a href="">О производстве</a></li>
        <li><a href="">Экологические стандарты</a></li>
      </ul>
    </span>

    <div class="created-by">
      <img
        src="IMG/logo-htmlacademy.svg"
        width="109"
        height="38"
        alt="HTML Academy"
      />
      <p>Сделано в <a href="#">HTML Academy</a> © 2023</p>
    </div>
    `;
};

const headerElement = document.querySelector(`.main-header`);
const footerElement = document.querySelector(`.main-footer`);

render(headerElement, header(), `beforeend`);
render(footerElement, footer(), `beforeend`);
