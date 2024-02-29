

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

const openPayPopap = document.querySelectorAll('.cards-item-slider')
const popupVisible = document.querySelector('.pop-up-paiment')
const closePopupBTN = document.querySelector('.paiment-block-wrapper-popup>img')

openPayPopap.forEach(element => element.addEventListener("click", function(e) {
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
let currentSlideIndex = 0;

function showSlide(slideIndex) {
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

document.querySelector('.custom-button:nth-child(2)').addEventListener('click', function() {
    currentSlideIndex = (currentSlideIndex + 1) % cardsSlides.length;
    showSlide(currentSlideIndex);
});

document.querySelector('.custom-button:nth-child(1)').addEventListener('click', function() {
    currentSlideIndex = (currentSlideIndex - 1 + cardsSlides.length) % cardsSlides.length;
    showSlide(currentSlideIndex);
});


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

//------------------------------------------------------------------------------------

// иконка копия URL текущей страницы

function copyCurrentUrlToClipboard() {
  var currentUrl = window.location.href; // Получаем текущий URL страницы
  navigator.clipboard.writeText(currentUrl).then(function() {

      var popup = document.createElement('div');
      popup.classList.add('popup');
      popup.textContent = 'Ссылка скопирована: ' + currentUrl;
      document.body.appendChild(popup);

      // Удаляем элемент попапа через 3 секунды
      setTimeout(function() {
          popup.remove();
      }, 2000);
  }).catch(function(err) {
      console.error('Ошибка копирования URL: ', err);
  });
}

// Вызов функции при клике на кнопку
document.getElementById('copyUrlButton').addEventListener('click', copyCurrentUrlToClipboard);


//mixplat

const inputBTNMainPayForm = document.querySelector(".pay-form-submit");
const sumItems = document.querySelectorAll('.sum-item');
const inputSum = document.querySelector('.sum-item.input');
const regularityFieldWrapper = document.querySelector(".help-field")

// === достаем данные из основного платежного блока (не попап) и отправляем их как аргументы run_mixplat_widget()  === //

let sumMainPayBlock = 30000; // сумма платежа
let regularityChoosing = "oneTime"; // частота платежа разово или ежемесячно. По умолчанию разово (oneTime)

// достаем данные из выбранной суммы
sumItems.forEach(item => {
  item.addEventListener('click', function() {
    sumMainPayBlock = this.innerHTML.replace(/&#x20bd/g, '');
    sumMainPayBlock = parseFloat(sumMainPayBlock) * 100; 
  });
});

// достаем данные если клиент ввел свою сумму и сохраняем в sumMainPayBlock
inputSum.addEventListener('input', function() {
 sumMainPayBlock = inputSum.value*100;
})

// устанавливаем регулярность платежа
regularityFieldWrapper.addEventListener("click", function(e){
  if (e.target.classList.contains("mounthly")) regularityChoosing = "monthly";
  if (e.target.classList.contains("one-time")) regularityChoosing = "oneTime";
})


inputBTNMainPayForm.addEventListener("click", run_mixplat_widget(sumMainPayBlock, regularityChoosing)/*function(e) {
  e.preventDefault();
  run_mixplat_widget(sumMainPayBlock, regularityChoosing);
}*/);

function run_mixplat_widget(ammount, regularity) {
  console.log(ammount)
  console.log(regularity)
}

// === достаем данные из всплывающего платежного блока (попап) и отправляем их как аргументы run_mixplat_widget()  === //

let sumPopupBlock = 30000; // сумма платежа
let postcardName = ""

let sumPopupValue = document.querySelector(".sum-item-popup")
let sumPopupInputField = document.querySelector(".sum-item-popup.input")
let cardsItemSlider = document.querySelectorAll(".cards-item-slider")
let inputBTNPopup = document.querySelector(".pay-form-submit-popup")


// достаем данные из выбранной суммы
sumPopupValue.addEventListener('click', function() {
  sumPopupBlock = this.innerHTML.replace(/&#x20bd/g, '');
  sumPopupBlock = parseFloat(sumPopupBlock) * 100; 
});

// достаем данные если клиент ввел свою сумму и сохраняем в sumPopupBlock
sumPopupInputField.addEventListener('input', function() {
  sumPopupBlock = sumPopupInputField.value*100;
 })

 // Достаем название карточки из id элемента по которому произошел клик
 cardsItemSlider.forEach(item => {
  item.addEventListener('click', function() {
    postcardName = this.getAttribute('id');
  });
});

inputBTNPopup.addEventListener("click", run_mixplat_widget(sumMainPayBlock, regularityChoosing));





