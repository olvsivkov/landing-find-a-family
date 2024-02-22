

// burger-menu

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-items");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleShowMenu() {
  menu.classList.toggle('showMenu');
}

function toggleHamburgerClasses() {
  hamburger.classList.toggle('open');
}

function toggleMenu() {
  toggleShowMenu();
  toggleHamburgerClasses();
}

hamburger.addEventListener("click", toggleMenu);
menuItems.forEach(menuItem => menuItem.addEventListener("click", toggleMenu));

//------------------------------------------------------------------------------------------

// Всплывающий popup при клике на "выбрать" в блоке с открытками
// открыть / закрыть popup

const postCardBTN = document.querySelectorAll('.postcard-btn')
const popupVisible = document.querySelector('.pop-up-paiment')
const closePopupBTN = document.querySelector('.paiment-block-wrapper-popup>img')

postCardBTN.forEach(element => element.addEventListener("click", function(e) {
  e.preventDefault();
  popupVisible.classList.add("modal-show");
}))

closePopupBTN.addEventListener("click", function(e) {
  popupVisible.classList.remove("modal-show");
})

// второй popup "Оплата прошла успешно"

const submitBTN = document.querySelector(".pay-form-submit-popup")
const secondPopup = document.querySelector(".second-popup")

submitBTN.addEventListener("click", function(e) {
  e.preventDefault();
  popupVisible.classList.remove("modal-show");
  secondPopup.classList.add("modal-show");
  setTimeout(() => {
    secondPopup.classList.remove('modal-show');
  }, 2000);
})

// слайдер popup способов оплаты

let popupSlides = document.querySelectorAll('.slide');
let popupDots = document.querySelectorAll('.dot-popup');

function showSlidesPopup(slideIndex = 0) {
  for (let i = 0; i < popupSlides.length; i++) {
    if (i === slideIndex || i === slideIndex + 1 || i === slideIndex + 2) {
      popupSlides[i].style.display = 'block';
    } else {
      popupSlides[i].style.display = 'none';
    }
  }

  for (let i = 0; i < popupDots.length; i++) {
    if (i === slideIndex) {
      popupDots[i].classList.add('dot-active');
    } else {
      popupDots[i].classList.remove('dot-active');
    }
  }
}

//----------------------------------------------------------------------------------
// слайдер открыток при разрешении экрана 639 - 360px

let cardsSlides = document.querySelectorAll('.cards-item-slider');
let cardsDots = document.querySelectorAll('.dot-postcard');

function cardsShowSlides(slideIndex) {
  for (let i = 0; i < cardsSlides.length; i++) {
    if (i === slideIndex) {
      cardsSlides[i].style.display = 'block';
    } else {
      cardsSlides[i].style.display = 'none';
    }
  }

  for (let i = 0; i < cardsDots.length; i++) {
    if (i === slideIndex) {
      cardsDots[i].classList.add('dot-active');
    } else {
      cardsDots[i].classList.remove('dot-active');
    }
  }
}


// при разрашении экрана больше 639px всем блокам с открытками возвращаем видимость 

function changeDisplayStyleOfCardsSlides() {
  document.querySelectorAll('.cards-item-slider').forEach(slide => slide.style.display = 'block');
}

let mediaQueryMax = window.matchMedia('(min-width: 639px)');
mediaQueryMax.addEventListener('change', changeDisplayStyleOfCardsSlides);
changeDisplayStyleOfCardsSlides();

//Для коррктной работы слайдера при разрешении экрана меньше 639px все блоки с открытками кроме первого пропадают.

const breakpoint = 639;

function toggleDisplay(sliders) {
  return [...sliders].map((s, idx) => {
    s.style.display = idx === 0 || window.matchMedia(`(min-width: ${breakpoint + 1}px)`).matches ? 'block' : 'none';
    return s;
  });
}

window.addEventListener('load', () => toggleDisplay(document.querySelectorAll('.cards-item-slider')));
window.addEventListener('resize', () => toggleDisplay(document.querySelectorAll('.cards-item-slider')));

//-------------------------------------------------------------------------------------------------------
// Блок с оплатой пожертвований
// слайдер способов оплаты и стили точек

let slides = document.querySelectorAll('.slide-item');
let dots = document.querySelectorAll('.dot-paiment-item');

function showSlides(slideIndex = 0) {
  for (let i = 0; i < slides.length; i++) {
    if (i === slideIndex || i === slideIndex + 1 || i === slideIndex + 2) {
      slides[i].style.display = 'block';
    } else {
      slides[i].style.display = 'none';
    }
  }

  for (let i = 0; i < dots.length; i++) {
    if (i === slideIndex) {
      dots[i].classList.add('dot-active');
    } else {
      dots[i].classList.remove('dot-active');
    }
  }
}

// toggler id="pay-active" в блоках помощь единоразовая/ежемесячная и выбор суммы доната.

const helpFields = document.querySelectorAll('.help-field > div');
const sums = document.querySelectorAll('.choose-sum-wrap > div');

function handleClick(event, elements) {
  elements.forEach(elem => {
    elem.removeAttribute('id');
  });
  if (event.target.id === 'pay-active') return;
  event.target.id = 'pay-active';
}

helpFields.forEach(elem => {
  elem.addEventListener('click', (event) => handleClick(event, helpFields));
});

sums.forEach(elem => {
  elem.addEventListener('click', (event) => handleClick(event, sums));
})

// Напишите нам

function openEmail() {
  window.location.href = `mailto: info@sirota.ru`;
}


